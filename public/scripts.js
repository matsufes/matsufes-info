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
case "not-contains": return v.indexOf(w) < 0;
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
var prefix = "";
var mem = {};
var sharedDomain = (env && env.sharedDomain) || "";
function domainAttr() {
var h = location.hostname;
return sharedDomain && (h === sharedDomain || h.slice(-sharedDomain.length - 1) === "." + sharedDomain)
? "; Domain=" + sharedDomain
: "";
}
function lsGet(k) {
try {
return localStorage.getItem(k);
} catch (e) {
return null;
}
}
function ckName(k) {
return "ls_" + encodeURIComponent(k);
}
function ckGet(k) {
return cookieGet(ckName(k));
}
function cookieGet(name) {
var n = name + "=";
var parts = document.cookie ? document.cookie.split("; ") : [];
for (var i = 0; i < parts.length; i++) {
if (parts[i].indexOf(n) !== 0) continue;
try {
return decodeURIComponent(parts[i].slice(n.length));
} catch (e) {
return null;
}
}
return null;
}
function ckSet(k, v, age) {
document.cookie =
ckName(k) + "=" + encodeURIComponent(v) + "; path=/; max-age=" + age + "; SameSite=Lax" +
(location.protocol === "https:" ? "; Secure" : "");
}
function scSet(k, v) {
document.cookie =
encodeURIComponent(k) + "=" + encodeURIComponent(v) + "; Max-Age=31536000; Path=/" + domainAttr() +
"; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : "");
return cookieGet(encodeURIComponent(k)) === v;
}
function storeGet(key, shared) {
var k = prefix + key;
if (shared) {
var s = cookieGet(encodeURIComponent(k));
if (s != null) return s;
}
var v = lsGet(k);
if (v == null) v = ckGet(k);
if (v == null && has(mem, k)) v = mem[k];
return v == null ? "" : v;
}
function storeSet(key, v, shared) {
var k = prefix + key;
try {
if (shared && scSet(k, v)) {
try {
localStorage.removeItem(k);
} catch (e) {}
if (ckGet(k) != null) ckSet(k, "", 0);
delete mem[k];
return;
}
} catch (e) {}
try {
localStorage.setItem(k, v);
if (localStorage.getItem(k) === v) {
if (ckGet(k) != null) ckSet(k, "", 0);
delete mem[k];
return;
}
} catch (e) {}
try {
localStorage.removeItem(k);
} catch (e) {}
try {
ckSet(k, v, 31536000);
if (ckGet(k) === v) {
delete mem[k];
return;
}
} catch (e) {}
mem[k] = v;
}
return {
install: function (root) {
var alive = true;
var vars = {};
function getVar(name) {
return has(vars, name) ? vars[name] : dig(vars, name);
}
function inTpl(el) {
return !!(el.closest && el.closest("[data-tpl]"));
}
function find(self, target) {
if (!target || target === "@self") return self ? [self] : [];
var els;
try {
els = Array.prototype.slice
.call(root.querySelectorAll("#" + CSS.escape(target)))
.filter(function (el) {
return !inTpl(el);
});
} catch (e) {
return [];
}
var row = self && self.closest && self.closest("[data-row],[data-item]");
if (row) {
var mine = els.filter(function (el) {
return row.contains(el);
});
if (mine.length) return mine;
}
return els;
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
root.querySelectorAll("[data-live]").forEach(function (el) {
if (inTpl(el)) return;
var t = el.firstChild;
if (!t || t.nodeType !== 3) {
t = document.createTextNode("");
el.insertBefore(t, el.firstChild);
}
t.nodeValue = resolve(el.getAttribute("data-live"), el);
});
}
function test(c, self) {
if (c.subject === "var") {
return cmp(resolve(c.left, self), c.op, resolve(c.value, self));
}
var els = find(self, c.target);
var r = false;
if (c.subject === "value") {
return cmp(valueOf(els), c.op, resolve(c.value, self));
}
return c.not ? !r : r;
}
var filters = new Map();
function fieldOf(item, f) {
if (item == null) return undefined;
return has(item, f) ? item[f] : dig(item, f);
}
function passOne(conds, item) {
var ok = false;
var grp = true;
conds.forEach(function (c, i) {
if (i && !c.and) {
ok = ok || grp;
grp = true;
}
var fv = fieldOf(item, c.field);
grp = grp && cmp(fv == null ? "" : String(fv), c.op, c.value);
});
return ok || grp;
}
function passes(fs, item) {
var acc = true;
fs.forEach(function (f, i) {
var r = passOne(f.conds, item);
acc = i === 0 ? r : f.join === "or" ? acc || r : acc && r;
});
return acc;
}
var sorts = new Map();
function itemOf(w) {
try {
return JSON.parse(w.getAttribute("data-item")) || {};
} catch (e) {
return {};
}
}
function order(x, y) {
return typeof x === "number" && typeof y === "number"
? x - y
: String(x == null ? "" : x).localeCompare(String(y == null ? "" : y), "ja", {
numeric: true,
});
}
function applySort(list) {
var s = sorts.get(list.getAttribute("data-array"));
if (!s) return;
var dir = s.dir === "desc" ? -1 : 1;
var rows = Array.prototype.filter
.call(list.children, function (w) {
return w.hasAttribute("data-item");
})
.map(function (w, i) {
return { w: w, v: fieldOf(itemOf(w), s.field), i: i };
});
rows.sort(function (a, b) {
return order(a.v, b.v) * dir || a.i - b.i;
});
if (
rows.every(function (r, i) {
return r.i === i;
})
) {
return;
}
rows.forEach(function (r) {
list.appendChild(r.w);
});
}
function relist(name) {
listsOf(name).forEach(function (list) {
applySort(list);
applyFilters(list);
});
}
function applyFilters(list) {
var fs = filters.get(list.getAttribute("data-array")) || [];
Array.prototype.forEach.call(list.children, function (w) {
if (!w.hasAttribute("data-item")) return;
w.style.display = passes(fs, itemOf(w)) ? "contents" : "none";
});
}
function listsOf(name) {
try {
return Array.prototype.slice.call(
root.querySelectorAll('[data-array="' + CSS.escape(name) + '"]')
);
} catch (e) {
return [];
}
}
function itemsOf(v) {
var out = [];
if (!Array.isArray(v)) return out;
v.forEach(function (x) {
if (x == null || Array.isArray(x)) return;
out.push(typeof x === "object" ? x : { "値": x });
});
return out;
}
function setValue(self, id, v) {
var els = find(self, id);
if (valueOf(els) === v) return;
els.forEach(function (el) {
var input = inputOf(el);
if (!input) return;
if (input.type === "checkbox") {
input.checked = v !== "" && v !== "off" && v !== "false";
} else if (input.type === "radio") {
input.checked = input.value === v;
} else {
input.value = v;
}
input.dispatchEvent(new Event("input", { bubbles: true }));
input.dispatchEvent(new Event("change", { bubbles: true }));
});
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
case "set-value":
setValue(self, st.target, resolve(st.value, self));
break;
case "filter-array": {
if (!st.array || !st.conds || !st.conds.length) break;
var fs = (filters.get(st.array) || []).slice();
var key =
st.no != null
? "n" + st.no
: "f" +
st.conds
.map(function (c) {
return c.field;
})
.sort()
.join("|");
var entry = {
key: key,
no: st.no,
join: st.join,
conds: st.conds.map(function (c) {
return { field: c.field, op: c.op, value: resolve(c.value, self), and: c.and };
}),
};
var at = -1;
fs.forEach(function (f, i) {
if (f.key === key) at = i;
});
if (at >= 0) fs[at] = entry;
else fs.push(entry);
filters.set(st.array, fs);
relist(st.array);
break;
}
case "unfilter-array":
if (st.no != null) {
filters.set(
st.array,
(filters.get(st.array) || []).filter(function (f) {
return f.no !== st.no;
})
);
} else filters.delete(st.array);
relist(st.array);
break;
case "sort-array":
if (!st.array || !st.field) break;
sorts.set(st.array, { field: st.field, dir: st.dir });
relist(st.array);
break;
case "store-save":
if (st.key) storeSet(st.key, resolve(st.value, self), !!st.shared);
break;
case "store-load":
setVar(st.into, st.key ? storeGet(st.key, !!st.shared) : "");
break;
case "list-edit": {
if (!st.into) break;
var lsep = st.sep || ",";
var lcur = getVar(st.into);
var parts = (Array.isArray(lcur) ? lcur.map(text) : text(lcur).split(lsep))
.map(function (x) {
return x.trim();
})
.filter(Boolean);
var lv = resolve(st.value, self).trim();
if (lv) {
var lat = parts.indexOf(lv);
if (st.op === "remove" || (st.op === "toggle" && lat >= 0)) {
parts = parts.filter(function (x) {
return x !== lv;
});
} else if (lat < 0) parts.push(lv);
}
setVar(st.into, parts.join(lsep));
break;
}
case "array-item": {
var arr = getVar(st.array);
setVar(st.into, st.path ? dig(arr, st.path) : arr);
break;
}
case "array-find": {
var list = getVar(st.array);
var key = resolve(st.value, self);
var hit = null;
if (Array.isArray(list) && st.field) {
for (var fi = 0; fi < list.length; fi++) {
var fv = dig(list[fi], st.field);
var fs = fv == null ? "" : String(fv);
if (fs === key || encodeURIComponent(fs) === key) {
hit = list[fi];
break;
}
}
}
setVar(st.into, hit);
break;
}
case "array-field": {
var av = getVar(st.array);
if (!Array.isArray(av) || !st.field) break;
var one = /^\{([^{}]+)\}$/.exec(String(st.value || "").trim());
setVar(
st.array,
av.map(function (x) {
if (x == null || Array.isArray(x)) return x;
var it = typeof x === "object" ? x : { "値": x };
var ao = {};
for (var ak in it) if (has(it, ak)) ao[ak] = it[ak];
ao[st.field] = one ? lookup(one[1].trim(), self, it) : resolve(st.value, self, it);
return ao;
})
);
break;
}
case "count": {
var ca = getVar(st.array);
var cn = Array.isArray(ca) ? ca.length : 0;
var cf = filters.get(st.array) || [];
if (Array.isArray(ca)) {
cn = itemsOf(ca).filter(function (x) {
return passes(cf, x);
}).length;
} else {
var cl = listsOf(st.array).filter(function (l) {
return !l.hasAttribute("data-client-list");
})[0];
if (cl) {
cn = Array.prototype.filter.call(cl.children, function (w) {
return w.hasAttribute("data-item") && passes(cf, itemOf(w));
}).length;
}
}
setVar(st.into, cn);
break;
}
case "join": {
var src = getVar(st.array);
setVar(
st.into,
Array.isArray(src)
? src
.map(function (x) {
var v = st.field ? dig(x, st.field) : x;
return v == null || typeof v === "object" ? "" : String(v);
})
.filter(function (x) {
return x !== "";
})
.join(st.sep || "")
: text(src)
);
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
} else if (st.kind === "repeat") {
walk(st.then);
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
function onInput(e) {
chain(e.target).forEach(function (el) {
fire(el, "change");
});
}
var seen = new WeakSet();
function scan() {
if (!alive) return;
if (sorts.size || filters.size) {
root.querySelectorAll("[data-array]").forEach(function (list) {
if (list.hasAttribute("data-client-list")) return;
applySort(list);
applyFilters(list);
});
}
root.querySelectorAll("[data-scripts]").forEach(function (el) {
if (seen.has(el) || inTpl(el)) return;
seen.add(el);
var list = parse(el);
if (list.some(function (s) { return s.trigger === "load"; })) {
fire(el, "load");
}
});
}
var queued = false;
var mo = new MutationObserver(function () {
if (queued) return;
queued = true;
requestAnimationFrame(function () {
queued = false;
scan();
});
});
mo.observe(root, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ["data-scripts"],
});
scan();
root.addEventListener("click", onClick);
root.addEventListener("mouseover", onOver);
root.addEventListener("mouseout", onOut);
root.addEventListener("input", onInput);
return function dispose() {
alive = false;
filters.clear();
sorts.clear();
hovering.forEach(function (t) {
clearTimeout(t);
});
hovering.clear();
mo.disconnect();
root.removeEventListener("click", onClick);
root.removeEventListener("mouseover", onOver);
root.removeEventListener("mouseout", onOut);
root.removeEventListener("input", onInput);
};
},
};
})({"sharedDomain":"matsufes.info"}).install(document);
