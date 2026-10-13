(function (env) {
var cache = new Map();
function parse(el) {
var raw = el.getAttribute("data-scripts") || "[]";
var v = cache.get(raw);
if (!v) {
try {
v = JSON.parse(raw);
} catch (e) {
v = [];
}
cache.set(raw, v);
}
return v;
}
function has(o, k) {
return Object.prototype.hasOwnProperty.call(o, k);
}
function dig(v, path) {
var keys = String(path).split(".");
for (var i = 0; i < keys.length; i++) {
if (v == null || typeof v !== "object") return undefined;
var k = keys[i];
v = Array.isArray(v) && k === "-1" ? v[v.length - 1] : v[k];
}
return v;
}
function text(v) {
if (v == null) return "";
if (Array.isArray(v)) return v.map(text).filter(Boolean).join(", ");
if (typeof v === "object") return "";
return String(v);
}
function isHidden(el) {
return getComputedStyle(el).display === "none";
}
function show(el) {
el.style.display = "";
if (isHidden(el)) {
el.style.display =
el.getAttribute("data-toggle-show") ||
"block";
}
}
function hide(el) {
el.style.display = "none";
}
function inputOf(el) {
return el.matches("input,select,textarea")
? el
: el.querySelector("input,select,textarea");
}
function valueOf(els) {
for (var i = 0; i < els.length; i++) {
var input = inputOf(els[i]);
if (!input) return (els[i].textContent || "").trim();
if (input.type === "checkbox") return input.checked ? "on" : "";
if (input.type === "radio") {
if (input.checked) return input.value;
continue;
}
return input.value;
}
return "";
}
function go(url, newTab) {
if (!url) return;
if (newTab) {
window.open(url, "_blank", "noopener");
return;
}
if (url.charAt(0) === "#") {
location.hash = url;
return;
}
var r = window.next && window.next.router;
if (url.charAt(0) === "/" && r && r.push) r.push(url);
else location.href = url;
}
function cmp(v, op, w) {
switch (op) {
case "neq": return v !== w;
case "contains": return v.indexOf(w) >= 0;
case "gt": return parseFloat(v) > parseFloat(w);
case "lt": return parseFloat(v) < parseFloat(w);
case "empty": return v === "";
case "not-empty": return v !== "";
case "in":
return w.split(",").some(function (x) {
return x.trim() === v;
});
default: return v === w;
}
}
function sleep(s) {
return new Promise(function (res) {
setTimeout(res, Math.max(0, (Number(s) || 0) * 1000));
});
}
return {
install: function (root) {
var alive = true;
var vars = {};
function getVar(name) {
return has(vars, name) ? vars[name] : dig(vars, name);
}
function find(self, target) {
if (!target || target === "@self") return self ? [self] : [];
try {
return Array.prototype.slice.call(
root.querySelectorAll("#" + CSS.escape(target))
);
} catch (e) {
return [];
}
}
function lookup(name, self, item) {
if (item) {
var iv = has(item, name) ? item[name] : dig(item, name);
if (iv !== undefined) return iv;
}
var v = getVar(name);
if (v !== undefined) return v;
var els = find(self, name.split(".")[0]);
if (els.length) return valueOf(els);
try {
var q = new URLSearchParams(location.search).get(name);
if (q != null) return q;
} catch (e) {}
return "";
}
function resolve(s, self, item) {
return String(s == null ? "" : s).replace(/\{([^{}]+)\}/g, function (m, k) {
return text(lookup(k.trim(), self, item));
});
}
function resolveUrl(s, self, item) {
return String(s == null ? "" : s).replace(
/\{([^{}]+)\}|%7B(.*?)%7D/gi,
function (m, a, b) {
var k = a;
if (k == null) {
try {
k = decodeURIComponent(b);
} catch (e) {
return m;
}
}
return encodeURIComponent(text(lookup(k.trim(), self, item)));
}
);
}
function setVar(name, v) {
if (!name) return;
vars[name] = v;
}
function test(c, self) {
var els = find(self, c.target);
var r = false;
if (c.subject === "value") {
return cmp(valueOf(els), c.op, resolve(c.value, self));
}
return c.not ? !r : r;
}
function exec(st, self) {
switch (st.kind) {
case "show":
find(self, st.target).forEach(show);
break;
case "hide":
find(self, st.target).forEach(hide);
break;
case "toggle":
find(self, st.target).forEach(function (el) {
if (isHidden(el)) show(el);
else hide(el);
});
break;
case "open-page":
go(st.href, st.newTab);
break;
case "open-url": {
var url = resolveUrl(st.url, self);
go(url, st.newTab);
break;
}
}
}
function runSteps(steps, self) {
var i = 0;
function next() {
while (alive && i < steps.length) {
var st = steps[i++];
if (st.kind === "wait") return sleep(st.seconds).then(next);
if (st.kind === "if") {
var branch = test(st.cond, self) ? st.then : st.else;
if (branch && branch.length) {
return runSteps(branch, self).then(next);
}
continue;
}
exec(st, self);
}
return Promise.resolve();
}
return next();
}
function fire(el, trigger, keep) {
parse(el).forEach(function (s) {
if (s.trigger !== trigger) return;
if (keep !== undefined && !!s.keep !== keep) return;
runSteps(s.steps || [], el);
});
}
function chain(t) {
var out = [];
var el = t && t.nodeType === 1 ? t : t && t.parentElement;
el = el && el.closest("[data-scripts]");
while (el && root.contains(el)) {
out.push(el);
el = el.parentElement && el.parentElement.closest("[data-scripts]");
}
return out;
}
function onClick(e) {
chain(e.target).forEach(function (el) {
fire(el, "click");
});
}
function shownByHover(el) {
var out = [];
function walk(steps) {
(steps || []).forEach(function (st) {
if (st.kind === "show" || st.kind === "toggle") {
find(el, st.target).forEach(function (t) {
if (t !== el && out.indexOf(t) < 0) out.push(t);
});
} else if (st.kind === "if") {
walk(st.then);
walk(st.else);
}
});
}
parse(el).forEach(function (s) {
if (s.trigger === "hover-start") walk(s.steps);
});
return out;
}
function keepsHover(el) {
return parse(el).some(function (s) {
return s.trigger === "hover-end" && s.keep;
});
}
var hovering = new Map();
function leaveLater(el) {
clearTimeout(hovering.get(el));
hovering.set(
el,
setTimeout(function () {
if (!alive || !hovering.has(el)) return;
var still = [el].concat(shownByHover(el)).some(function (g) {
return root.contains(g) && g.matches(":hover");
});
if (still) {
hovering.set(el, null);
return;
}
hovering.delete(el);
fire(el, "hover-end", true);
}, 150)
);
}
function onOver(e) {
chain(e.target).forEach(function (el) {
if (e.relatedTarget && el.contains(e.relatedTarget)) return;
if (hovering.has(el)) {
clearTimeout(hovering.get(el));
hovering.set(el, null);
return;
}
if (keepsHover(el)) hovering.set(el, null);
fire(el, "hover-start");
});
}
function onOut(e) {
var done = [];
chain(e.target).forEach(function (el) {
if (e.relatedTarget && el.contains(e.relatedTarget)) return;
if (hovering.has(el)) {
done.push(el);
leaveLater(el);
fire(el, "hover-end", false);
return;
}
fire(el, "hover-end");
});
hovering.forEach(function (t, el) {
if (t === null && done.indexOf(el) < 0) leaveLater(el);
});
}
root.addEventListener("click", onClick);
root.addEventListener("mouseover", onOver);
root.addEventListener("mouseout", onOut);
return function dispose() {
alive = false;
hovering.forEach(function (t) {
clearTimeout(t);
});
hovering.clear();
root.removeEventListener("click", onClick);
root.removeEventListener("mouseover", onOver);
root.removeEventListener("mouseout", onOut);
};
},
};
})({"sharedDomain":"matsufes.info"}).install(document);
