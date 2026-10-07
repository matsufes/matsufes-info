(function (env) {
  env = env || {};
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
  function isHidden(el) {
    return getComputedStyle(el).display === "none";
  }
  function touch(el) {
    if (env.touch) env.touch(el);
  }
  function show(el) {
    touch(el);
    el.style.display = "";
    if (isHidden(el)) {
      el.style.display =
        (env.showDisplay && env.showDisplay(el)) ||
        el.getAttribute("data-toggle-show") ||
        "block";
    }
  }
  function hide(el) {
    touch(el);
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
      function test(c, self) {
        var els = find(self, c.target);
        var r;
        if (c.subject === "value") {
          return cmp(valueOf(els), c.op, c.value == null ? "" : String(c.value));
        }
        if (c.subject === "checked") {
          r = els.some(function (el) {
            var i = inputOf(el);
            return !!(i && i.checked);
          });
        } else if (c.subject === "visible") {
          r = els.length > 0 && !isHidden(els[0]);
        } else {
          r = els.some(function (el) {
            return el.matches(":hover");
          });
        }
        return c.not ? !r : r;
      }
      // {ID} をその要素の現在の値に置き換える（見つからなければ空）
      function resolve(s, self) {
        return String(s == null ? "" : s).replace(/\{([^{}]+)\}/g, function (m, k) {
          return valueOf(find(self, k.trim()));
        });
      }
      // リストの絞り込み: リスト要素 → { 項目名: { op, value } }
      var filters = new Map();
      function applyFilters(list) {
        var fs = filters.get(list) || {};
        Array.prototype.forEach.call(list.children, function (w) {
          if (!w.hasAttribute("data-item")) return;
          var item;
          try {
            item = JSON.parse(w.getAttribute("data-item")) || {};
          } catch (e) {
            item = {};
          }
          var ok = Object.keys(fs).every(function (f) {
            var v = item[f] == null ? "" : String(item[f]);
            return cmp(v, fs[f].op, fs[f].value);
          });
          w.style.display = ok ? "contents" : "none";
        });
      }
      function setValue(self, id, v) {
        var els = find(self, id);
        if (valueOf(els) === v) return;
        if (env.setValue && env.setValue(id, v)) {
          // 反映後に「値が変わったとき」を動かす
          setTimeout(function () {
            els.forEach(function (el) {
              fire(el, "change");
            });
          }, 0);
          return;
        }
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
          case "scroll-to": {
            var el = find(self, st.target)[0];
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
          }
          case "open-page":
            if (env.openPage) env.openPage(st);
            else go(st.href, st.newTab);
            break;
          case "open-url":
            if (env.openUrl) env.openUrl(st.url, !!st.newTab);
            else go(st.url, st.newTab);
            break;
          case "set-value":
            setValue(self, st.target, st.value == null ? "" : String(st.value));
            break;
          case "filter-list":
            find(self, st.target).forEach(function (list) {
              if (!st.field) return;
              var fs = filters.get(list) || {};
              fs[st.field] = { op: st.op, value: resolve(st.value, self) };
              filters.set(list, fs);
              applyFilters(list);
            });
            break;
          case "clear-filter":
            find(self, st.target).forEach(function (list) {
              filters.delete(list);
              applyFilters(list);
            });
            break;
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
      // keep: 省略 = すべて / true・false = 「表示した要素の上も含める」のもの・それ以外だけ
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
      // 「ホバーし始めたとき」に表示する要素（メニューなど）
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
      // 「表示した要素の上も含める」要素 → 外れ判定のタイマー（null = 判定待ちなし）。
      // 表示した要素へカーソルが移っている間は「ホバーが外れた」としない
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
          // 子要素間の移動では発火させない
          if (e.relatedTarget && el.contains(e.relatedTarget)) return;
          if (hovering.has(el)) {
            // 表示したメニューなどから戻ってきた
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
          } else {
            fire(el, "hover-end");
          }
        });
        // 表示したメニュー側から離れたときも、元の要素の外れ判定をする
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
      var io =
        typeof IntersectionObserver !== "undefined"
          ? new IntersectionObserver(function (entries) {
              entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                io.unobserve(en.target);
                fire(en.target, "in-view");
              });
            })
          : null;
      function scan() {
        if (!alive) return;
        // 描き直されたリストにも絞り込みをかけ直す
        filters.forEach(function (_, list) {
          if (root.contains(list)) applyFilters(list);
          else filters.delete(list);
        });
        root.querySelectorAll("[data-scripts]").forEach(function (el) {
          if (seen.has(el)) return;
          seen.add(el);
          var list = parse(el);
          if (list.some(function (s) { return s.trigger === "load"; })) {
            fire(el, "load");
          }
          if (io && list.some(function (s) { return s.trigger === "in-view"; })) {
            io.observe(el);
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
      root.addEventListener("click", onClick);
      root.addEventListener("mouseover", onOver);
      root.addEventListener("mouseout", onOut);
      root.addEventListener("input", onInput);
      scan();
      return function dispose() {
        alive = false;
        filters.clear();
        hovering.forEach(function (t) {
          clearTimeout(t);
        });
        hovering.clear();
        mo.disconnect();
        if (io) io.disconnect();
        root.removeEventListener("click", onClick);
        root.removeEventListener("mouseover", onOver);
        root.removeEventListener("mouseout", onOut);
        root.removeEventListener("input", onInput);
      };
    },
  };
})({}).install(document);
