/**
 * SemiAnalysis MVP — sticky sales bar
 */
(function () {
  var bar = document.getElementById("sa-sticky-bar");
  if (!bar) return;

  var dismissBtn = bar.querySelector("[data-sa-dismiss]");
  var threshold = 480;
  var dismissed = false;

  function setVisible(show) {
    if (dismissed) return;
    bar.hidden = !show;
    document.body.classList.toggle("sa-sticky-bar-visible", show);
  }

  function onScroll() {
    setVisible(window.scrollY > threshold);
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
      dismissed = true;
      bar.hidden = true;
      document.body.classList.remove("sa-sticky-bar-visible");
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
