(function () {
  function targetOf(t) {
    var id = t.getAttribute("data-toggle-target");
    return id ? document.getElementById(id) : null;
  }
  function isHidden(el) {
    return getComputedStyle(el).display === "none";
  }
  function toggle(el) {
    if (isHidden(el)) {
      el.style.display = "";
      if (isHidden(el)) {
        el.style.display = el.getAttribute("data-toggle-show") || "block";
      }
    } else {
      el.style.display = "none";
    }
  }
  function triggerFrom(e, kind) {
    var el =
      e.target instanceof Element
        ? e.target.closest("[data-toggle-target]")
        : null;
    return el && el.getAttribute("data-toggle-trigger") === kind ? el : null;
  }
  document.addEventListener("click", function (e) {
    var t = triggerFrom(e, "click");
    if (!t) return;
    var el = targetOf(t);
    if (el) toggle(el);
  });
  function onHover(e) {
    var t = triggerFrom(e, "hover");
    // 子要素間の移動では発火させない
    if (!t || (e.relatedTarget && t.contains(e.relatedTarget))) return;
    var el = targetOf(t);
    if (el) toggle(el);
  }
  document.addEventListener("mouseover", onHover);
  document.addEventListener("mouseout", onHover);
})();
