(function () {
var io =
"IntersectionObserver" in window
? new IntersectionObserver(
function (entries) {
entries.forEach(function (entry) {
if (!entry.isIntersecting) return;
entry.target.classList.add("is-inview");
io.unobserve(entry.target);
});
},
{ threshold: 0.15 }
)
: null;
var seen = new WeakSet();
function scan() {
document.querySelectorAll("[data-inview]").forEach(function (el) {
if (seen.has(el)) return;
seen.add(el);
if (io) io.observe(el);
else el.classList.add("is-inview");
});
}
scan();
var queued = false;
new MutationObserver(function () {
if (queued) return;
queued = true;
requestAnimationFrame(function () {
queued = false;
scan();
});
}).observe(document.body, { childList: true, subtree: true });
})();
