(function () {
  var els = document.querySelectorAll("[data-inview]");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-inview"); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach(function (el) { io.observe(el); });
})();
