(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (function initStickyBar() {
      if (document.querySelector(".sa-contact-page")) return;

      var bar = document.getElementById("sa-sticky-bar");
      if (!bar) return;

      var dismissBtn = bar.querySelector("[data-sa-dismiss]");
      var threshold = 480;
      var dismissed = false;

      function shouldShow() {
        var band = document.getElementById("sa-conversion-band");
        var reachedBand =
          band != null && band.getBoundingClientRect().top <= window.innerHeight;

        return window.scrollY > threshold && !reachedBand;
      }

      function update() {
        if (dismissed) return;
        var show = shouldShow();
        bar.hidden = !show;
        document.body.classList.toggle("sa-sticky-bar-visible", show);
      }

      if (dismissBtn) {
        dismissBtn.addEventListener("click", function () {
          dismissed = true;
          bar.hidden = true;
          document.body.classList.remove("sa-sticky-bar-visible");
        });
      }

      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update, { passive: true });
      update();
    })();
    (function initHeaderScroll() {
      var header = document.querySelector(".sa-header");
      if (!header) return;

      function onScroll() {
        header.classList.toggle("sa-header--scrolled", window.scrollY > 20);
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    })();
    (function initMobileNav() {
      var toggle = document.querySelector("[data-sa-menu-toggle]");
      var nav = document.getElementById("sa-mobile-nav");
      if (!toggle || !nav) return;

      function setOpen(open) {
        document.body.classList.toggle("sa-nav-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        nav.setAttribute("aria-hidden", open ? "false" : "true");
      }

      toggle.addEventListener("click", function () {
        setOpen(!document.body.classList.contains("sa-nav-open"));
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setOpen(false);
        });
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && document.body.classList.contains("sa-nav-open")) {
          setOpen(false);
        }
      });
    })();
    (function initWordRotator() {
      if (prefersReduced) return;

      var rotator = document.querySelector("[data-sa-word-rotator]");
      if (!rotator) return;

      var words = rotator.querySelectorAll("[data-sa-word]");
      if (words.length < 2) return;

      rotator.classList.add("sa-hero__rotator--js");

      var index = 0;
      for (var w = 0; w < words.length; w++) {
        words[w].classList.toggle("is-active", w === 0);
      }

      setInterval(function () {
        words[index].classList.remove("is-active");
        index = (index + 1) % words.length;
        words[index].classList.add("is-active");
      }, 3400);
    })();
    (function initModelsCarousel() {
      var root = document.querySelector("[data-sa-models-carousel]");
      if (!root) return;

      var cards = root.querySelectorAll("[data-sa-carousel-card]");
      var dots = root.querySelectorAll("[data-sa-carousel-dot]");
      var prevBtn = root.querySelector("[data-sa-carousel-prev]");
      var nextBtn = root.querySelector("[data-sa-carousel-next]");
      var count = cards.length;
      if (count < 2) return;

      var active = 0;
      var paused = false;
      var timer = null;
      var autoplayMs = 4500;

      function wrapOffset(index, activeIndex) {
        var diff = index - activeIndex;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        return diff;
      }

      function render() {
        for (var i = 0; i < cards.length; i++) {
          var offset = wrapOffset(i, active);
          cards[i].setAttribute("data-offset", String(offset));
          cards[i].hidden = Math.abs(offset) > 2;
        }
        for (var d = 0; d < dots.length; d++) {
          dots[d].classList.toggle("is-active", d === active);
          dots[d].setAttribute("aria-current", d === active ? "true" : "false");
        }
      }

      function goTo(index) {
        active = ((index % count) + count) % count;
        render();
      }

      function goNext() {
        goTo(active + 1);
      }

      function goPrev() {
        goTo(active - 1);
      }

      function startAutoplay() {
        if (paused) return;
        stopAutoplay();
        timer = window.setInterval(goNext, autoplayMs);
      }

      function stopAutoplay() {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      if (prevBtn) prevBtn.addEventListener("click", goPrev);
      if (nextBtn) nextBtn.addEventListener("click", goNext);

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          goTo(parseInt(dot.getAttribute("data-index"), 10));
        });
      });

      cards.forEach(function (card) {
        var link = card.querySelector(".sa-models-carousel__card-link");
        if (!link) return;
        link.addEventListener("click", function (e) {
          var offset = parseInt(card.getAttribute("data-offset"), 10);
          if (offset !== 0) {
            e.preventDefault();
            goTo(parseInt(card.getAttribute("data-index"), 10));
          }
        });
      });

      root.addEventListener("mouseenter", function () {
        paused = true;
        stopAutoplay();
      });

      root.addEventListener("mouseleave", function () {
        paused = false;
        startAutoplay();
      });

      render();
      startAutoplay();
    })();
    (function initArticleCarousel() {
      var root = document.querySelector("[data-sa-articles-carousel]");
      if (!root) return;

      var track = root.querySelector("[data-sa-articles-track]");
      var viewport = root.querySelector(".sa-articles-carousel__viewport");
      var slides = root.querySelectorAll("[data-sa-article-slide]");
      var dots = root.querySelectorAll("[data-sa-article-dot]");
      var prevBtn = root.querySelector("[data-sa-articles-prev]");
      var nextBtn = root.querySelector("[data-sa-articles-next]");
      var count = parseInt(root.getAttribute("data-article-count"), 10);

      if (!track || !viewport || !count || slides.length < count) return;

      var CARD_WIDTH = 320;
      var CARD_GAP = 24;
      var STRIDE = CARD_WIDTH + CARD_GAP;
      var positionIndex = count;
      var containerWidth = 0;
      var animate = false;
      var paused = false;
      var timer = null;
      var autoplayMs = 5000;

      function activeIndex() {
        return ((positionIndex % count) + count) % count;
      }

      function updateTrack(instant) {
        if (!containerWidth) return;

        var x = containerWidth / 2 - CARD_WIDTH / 2 - positionIndex * STRIDE;
        track.style.transition =
          instant || !animate
            ? "none"
            : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
        track.style.transform = "translateX(" + x + "px)";

        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.toggle("is-active", i === positionIndex);
          slides[i].setAttribute("aria-hidden", i === positionIndex ? "false" : "true");
        }

        for (var d = 0; d < dots.length; d++) {
          dots[d].classList.toggle("is-active", d === activeIndex());
          dots[d].setAttribute("aria-current", d === activeIndex() ? "true" : "false");
        }
      }

      function normalize() {
        if (positionIndex >= count * 2) {
          positionIndex -= count;
          animate = false;
          updateTrack(true);
        } else if (positionIndex < count) {
          positionIndex += count;
          animate = false;
          updateTrack(true);
        }
      }

      track.addEventListener("transitionend", function (e) {
        if (e.propertyName === "transform") normalize();
      });

      function goTo(index) {
        animate = true;
        positionIndex = count + index;
        updateTrack();
      }

      function goNext() {
        if (!containerWidth) {
          measure();
        }
        if (!containerWidth) return;
        animate = true;
        positionIndex += 1;
        updateTrack();
      }

      function goPrev() {
        if (!containerWidth) {
          measure();
        }
        if (!containerWidth) return;
        animate = true;
        positionIndex -= 1;
        updateTrack();
      }

      function startAutoplay() {
        if (paused || count <= 1) return;
        stopAutoplay();
        timer = window.setInterval(goNext, autoplayMs);
      }

      function stopAutoplay() {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      function measure() {
        containerWidth = viewport.getBoundingClientRect().width;

        if (slides.length > 0) {
          CARD_WIDTH = slides[0].getBoundingClientRect().width || slides[0].offsetWidth;
          var trackStyle = window.getComputedStyle(track);
          CARD_GAP = parseFloat(trackStyle.gap) || parseFloat(trackStyle.columnGap) || 24;
          STRIDE = CARD_WIDTH + CARD_GAP;
        }

        updateTrack(true);
        return containerWidth > 0;
      }

      function measureUntilReady(attempts, done) {
        if (measure() || attempts <= 0) {
          if (done) done();
          return;
        }
        window.requestAnimationFrame(function () {
          measureUntilReady(attempts - 1, done);
        });
      }

      if (prevBtn) prevBtn.addEventListener("click", goPrev);
      if (nextBtn) nextBtn.addEventListener("click", goNext);

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          goTo(parseInt(dot.getAttribute("data-index"), 10));
        });
      });

      var controls = root.querySelector(".sa-articles-carousel__controls");
      var pauseTarget = controls || root;

      pauseTarget.addEventListener("mouseenter", function () {
        paused = true;
        stopAutoplay();
      });

      pauseTarget.addEventListener("mouseleave", function () {
        paused = false;
        startAutoplay();
      });

      if ("ResizeObserver" in window) {
        var resizeObserver = new ResizeObserver(function () {
          measure();
        });
        resizeObserver.observe(viewport);
      } else {
        window.addEventListener("resize", measure);
      }

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          stopAutoplay();
        } else if (!paused) {
          measure();
          startAutoplay();
        }
      });

      measureUntilReady(30, startAutoplay);

      window.setTimeout(function () {
        if (!timer && !paused) {
          measure();
          startAutoplay();
        }
      }, 800);
    })();
    (function initScrollReveal() {
      var items = document.querySelectorAll(".sa-reveal, .sa-reveal--stagger");
      if (!items.length) return;

      function reveal(el) {
        if (el.classList.contains("is-visible")) return;
        el.classList.add("is-visible");
      }

      function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var trigger = Math.min(vh * 0.12, 96);
        return rect.top <= vh - trigger && rect.bottom >= trigger;
      }

      function revealInView() {
        items.forEach(function (el) {
          if (!el.classList.contains("is-visible") && isInViewport(el)) {
            reveal(el);
          }
        });
      }

      if (prefersReduced) {
        items.forEach(reveal);
        return;
      }

      var scrollTicking = false;

      function scheduleRevealCheck() {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(function () {
          revealInView();
          scrollTicking = false;
        });
      }

      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: [0, 0.08], rootMargin: "0px 0px 12% 0px" }
        );

        items.forEach(function (el) {
          if (isInViewport(el)) {
            reveal(el);
            return;
          }
          observer.observe(el);
        });
      }

      revealInView();
      requestAnimationFrame(revealInView);
      window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
      window.addEventListener("resize", scheduleRevealCheck, { passive: true });
      window.addEventListener("load", revealInView, { passive: true });
    })();
    (function initStatsCountUp() {
      var blocks = document.querySelectorAll("[data-sa-stats-count]");
      if (!blocks.length) return;

      var duration = 1200;

      function parseTarget(raw) {
        var numeric = parseInt(String(raw).replace(/\D/g, ""), 10);
        var suffix = String(raw).replace(/[\d]/g, "");
        return { numeric: numeric, suffix: suffix, raw: String(raw) };
      }

      function setValue(el, current, suffix) {
        el.textContent = String(current) + suffix;
      }

      function bindStatsBlock(stats) {
        var values = stats.querySelectorAll("[data-sa-count-to]");
        if (!values.length) return;

        var started = false;

        function runCountUp() {
          if (started) return;
          started = true;

          values.forEach(function (el) {
            var target = parseTarget(el.getAttribute("data-sa-count-to"));
            if (isNaN(target.numeric)) {
              el.textContent = target.raw;
              return;
            }

            if (prefersReduced) {
              el.textContent = target.raw;
              return;
            }

            var startTime = null;
            setValue(el, 0, target.suffix);

            function tick(now) {
              if (!startTime) startTime = now;
              var progress = Math.min((now - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              setValue(el, Math.round(target.numeric * eased), target.suffix);
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = target.raw;
              }
            }

            requestAnimationFrame(tick);
          });
        }

        function isStatsInView() {
          var rect = stats.getBoundingClientRect();
          var vh = window.innerHeight || document.documentElement.clientHeight;
          return rect.top <= vh * 0.9 && rect.bottom >= 0;
        }

        function maybeStart() {
          if (started) return;
          if (isStatsInView()) runCountUp();
        }

        if (prefersReduced) {
          runCountUp();
          return;
        }

        if ("IntersectionObserver" in window) {
          var observer = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  runCountUp();
                  observer.disconnect();
                }
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px 10% 0px" }
          );
          observer.observe(stats);
        }

        maybeStart();
        window.addEventListener("scroll", maybeStart, { passive: true });
        window.addEventListener("load", maybeStart, { passive: true });
      }

      blocks.forEach(bindStatsBlock);
    })();
    (function initModelCatalog() {
      var catalog = document.querySelector("[data-sa-model-catalog]");
      if (!catalog) return;

      var jsonEl = document.getElementById("sa-models-json");
      if (!jsonEl) return;

      var models;
      try {
        models = JSON.parse(jsonEl.textContent);
      } catch (e) {
        return;
      }

      var overlay = document.getElementById("sa-model-overlay");
      var content = document.getElementById("sa-model-overlay-content");
      var filters = catalog.querySelectorAll("[data-sa-filter]");
      var tiles = catalog.querySelectorAll(".sa-model-catalog__grid [data-sa-model-open]");
      var openButtons = catalog.querySelectorAll("[data-sa-model-open]");

      function modelBySlug(slug) {
        for (var i = 0; i < models.length; i++) {
          if (models[i].slug === slug) return models[i];
        }
        return null;
      }

      function categoryLabel(cat) {
        var map = {
          compute: "AI compute",
          infrastructure: "Infrastructure",
          "supply-chain": "Supply chain",
          research: "Research",
        };
        return map[cat] || cat;
      }

      function categoryAccent(cat) {
        var map = {
          compute: "cobalt",
          infrastructure: "mint",
          "supply-chain": "amber",
          research: "coral",
        };
        return map[cat] || "cobalt";
      }

      function accessBadgeClass(level) {
        var map = {
          Free: "mint",
          Institutional: "amber",
          Subscription: "cobalt",
        };
        return map[level] || "amber";
      }

      function renderSpecsPanel(model, specs) {
        var accent = categoryAccent(model.category);
        var rows = [
          { label: "Category", value: categoryLabel(model.category) },
          { label: "Data range", value: specs.dateRange },
          { label: "Granularity", value: specs.granularity },
          { label: "Access level", value: specs.accessLevel, badge: true },
          { label: "Update cadence", value: specs.updateCadence },
          { label: "Coverage", value: specs.coverage },
          { label: "Entities tracked", value: specs.entities },
        ];

        var rowsHtml = "";
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          if (!row.value) continue;
          var valueHtml = row.badge
            ? '<span class="sa-model-specs-panel__badge sa-model-specs-panel__badge--' +
              accessBadgeClass(row.value) +
              '">' +
              escapeHtml(row.value) +
              "</span>"
            : escapeHtml(row.value);
          rowsHtml +=
            '<div class="sa-model-specs-panel__row">' +
            "<dt>" +
            escapeHtml(row.label) +
            "</dt><dd>" +
            valueHtml +
            "</dd></div>";
        }

        return (
          '<aside class="sa-model-specs-panel sa-model-specs-panel--' +
          accent +
          '">' +
          '<div class="sa-model-specs-panel__head">' +
          '<p class="sa-model-specs-panel__eyebrow">At a glance</p>' +
          '<h3 class="sa-model-specs-panel__title">Model Specs</h3>' +
          "</div>" +
          '<dl class="sa-model-specs-panel__list">' +
          rowsHtml +
          "</dl></aside>"
        );
      }

      function renderOverlay(model) {
        if (!model || !content) return;

        var specs = model.specs || {};
        var includes = model.includes || [];
        var accent = categoryAccent(model.category);
        var contactUrl = catalog.getAttribute("data-sa-contact-url") || "/contact/";
        var isChipbook = model.slug === "chipbook";
        var chipbookUrl = model.href || "/products/chipbook/";
        var headerTitle = document.getElementById("sa-model-overlay-title");

        if (headerTitle) {
          headerTitle.textContent = model.name;
        }

        var includesHtml = "";
        for (var i = 0; i < includes.length; i++) {
          includesHtml +=
            '<li class="sa-model-detail__include">' +
            '<span class="sa-model-detail__include-check" aria-hidden="true">✓</span>' +
            escapeHtml(includes[i]) +
            "</li>";
        }

        var audienceHtml = "";
        if (model.audience) {
          audienceHtml =
            '<div class="sa-model-detail__audience">' +
            '<div class="sa-model-detail__audience-card">' +
            '<p class="sa-model-detail__audience-label sa-model-detail__audience-label--amber">For Investors</p>' +
            '<p class="sa-model-detail__audience-body">' +
            escapeHtml(model.audience.investors) +
            "</p></div>" +
            '<div class="sa-model-detail__audience-card">' +
            '<p class="sa-model-detail__audience-label sa-model-detail__audience-label--mint">For Executives</p>' +
            '<p class="sa-model-detail__audience-body">' +
            escapeHtml(model.audience.executives) +
            "</p></div></div>";
        }

        var actionsHtml =
          '<div class="sa-model-detail__actions">' +
          (isChipbook
            ? '<a class="sa-btn sa-btn--primary sa-btn-lift" href="' +
              escapeAttr(contactUrl) +
              '">Contact Sales</a>' +
              '<a class="sa-btn sa-btn--secondary sa-btn-lift" href="' +
              escapeAttr(chipbookUrl) +
              '">View ChipBook page</a>'
            : '<a class="sa-btn sa-btn--primary sa-btn-lift" href="' +
              escapeAttr(contactUrl) +
              '">Contact Sales</a>') +
          "</div>";

        content.innerHTML =
          '<div class="sa-model-detail">' +
          '<div class="sa-model-detail__hero">' +
          '<div class="sa-model-detail__intro">' +
          '<p class="sa-model-detail__label sa-model-detail__label--' +
          accent +
          '">Industry Model</p>' +
          '<h2 class="sa-model-detail__name">' +
          escapeHtml(model.name) +
          "</h2>" +
          '<p class="sa-model-detail__tagline">' +
          escapeHtml(model.tagline) +
          "</p>" +
          '<p class="sa-model-detail__desc">' +
          escapeHtml(model.description) +
          "</p>" +
          actionsHtml +
          "</div>" +
          renderSpecsPanel(model, specs) +
          "</div>" +
          '<div class="sa-model-detail__section">' +
          '<p class="sa-model-detail__section-label sa-model-detail__section-label--cobalt">Overview</p>' +
          '<h3 class="sa-model-detail__section-title">What this model covers</h3>' +
          '<p class="sa-model-detail__overview">' +
          escapeHtml(model.overview || model.description) +
          "</p></div>" +
          audienceHtml +
          (includesHtml
            ? '<div class="sa-model-detail__section sa-model-detail__section--includes">' +
              '<h3 class="sa-model-detail__section-title">What\'s included</h3>' +
              '<ul class="sa-model-detail__includes">' +
              includesHtml +
              "</ul></div>"
            : "") +
          "</div>";

        openOverlay();
      }

      function escapeHtml(str) {
        var div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
      }

      function escapeAttr(str) {
        return String(str).replace(/"/g, "&quot;");
      }

      var overlayCloseTimer = null;

      function openOverlay() {
        if (!overlay) return;
        if (overlayCloseTimer) {
          clearTimeout(overlayCloseTimer);
          overlayCloseTimer = null;
        }
        overlay.hidden = false;
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("sa-overlay-open");
        overlay.classList.remove("is-open");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            overlay.classList.add("is-open");
          });
        });
      }

      function closeOverlay() {
        if (!overlay) return;
        overlay.classList.remove("is-open");

        var finishClose = function () {
          overlay.hidden = true;
          overlay.setAttribute("aria-hidden", "true");
          document.body.classList.remove("sa-overlay-open");
          overlayCloseTimer = null;

          if (window.history.replaceState) {
            var url = new URL(window.location.href);
            url.searchParams.delete("model");
            window.history.replaceState({}, "", url.pathname + url.search);
          }
        };

        if (prefersReduced) {
          finishClose();
          return;
        }

        overlayCloseTimer = window.setTimeout(finishClose, 300);
      }

      function openModel(slug) {
        var model = modelBySlug(slug);
        if (!model) return;
        renderOverlay(model);

        if (window.history.replaceState) {
          var url = new URL(window.location.href);
          url.searchParams.set("model", slug);
          window.history.replaceState({}, "", url.pathname + "?" + url.searchParams.toString());
        }
      }

      function renumberTiles() {
        var visibleIndex = 0;

        tiles.forEach(function (tile) {
          if (tile.style.display === "none") return;

          visibleIndex += 1;
          var indexEl = tile.querySelector(".sa-model-tile__index");
          if (indexEl) {
            indexEl.textContent = String(visibleIndex).padStart(2, "0");
          }
        });
      }

      function applyFilter(filter) {
        tiles.forEach(function (tile) {
          var cat = tile.getAttribute("data-category");
          var show = filter === "all" || cat === filter;
          tile.classList.toggle("is-filter-hidden", !show);
          tile.style.display = show ? "" : "none";
        });
        renumberTiles();
      }

      filters.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var filter = btn.getAttribute("data-sa-filter");
          filters.forEach(function (b) {
            b.classList.toggle("is-active", b === btn);
            b.setAttribute("aria-selected", b === btn ? "true" : "false");
          });
          applyFilter(filter);
        });
      });

      openButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          openModel(btn.getAttribute("data-sa-model-open"));
        });
      });

      if (overlay) {
        overlay.querySelectorAll("[data-sa-model-close]").forEach(function (el) {
          el.addEventListener("click", closeOverlay);
        });
      }

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay && !overlay.hidden) closeOverlay();
      });

      if (window.saOpenModelSlug) {
        openModel(window.saOpenModelSlug);
      }
    })();
    (function initChipbookTrackers() {
      var root = document.querySelector("[data-sa-chipbook-trackers]");
      if (!root) return;

      var panels = root.querySelectorAll("[data-sa-tracker-panel]");

      function setActive(panel) {
        panels.forEach(function (item) {
          var active = item === panel;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
      }

      panels.forEach(function (panel) {
        panel.addEventListener("click", function () {
          setActive(panel);
        });
      });
    })();
    (function initChipbookPageBackground() {
      var page = document.querySelector(".sa-chipbook-page");
      if (!page || prefersReduced) return;

      var layers = page.querySelector("[data-sa-chipbook-layers]");
      var watermark = page.querySelector("[data-sa-chipbook-watermark]");
      if (!layers && !watermark) return;

      function interpolate(y, points) {
        if (y <= points[0].y) return points[0].v;
        for (var i = 1; i < points.length; i += 1) {
          if (y <= points[i].y) {
            var prev = points[i - 1];
            var next = points[i];
            var t = (y - prev.y) / (next.y - prev.y);
            return prev.v + (next.v - prev.v) * t;
          }
        }
        return points[points.length - 1].v;
      }

      function update() {
        var y = window.scrollY;
        if (layers) {
          layers.style.opacity = String(
            interpolate(y, [
              { y: 0, v: 1 },
              { y: 320, v: 0.45 },
              { y: 720, v: 0.06 },
            ])
          );
        }
        if (watermark) {
          watermark.style.opacity = String(
            interpolate(y, [
              { y: 0, v: 1 },
              { y: 240, v: 0.3 },
              { y: 520, v: 0 },
            ])
          );
        }
      }

      window.addEventListener("scroll", update, { passive: true });
      update();
    })();
    (function initAboutStack() {
      var stack = document.querySelector("[data-sa-about-stack]");
      if (!stack) return;

      var layers = stack.querySelectorAll("[data-sa-stack-layer]");
      if (!layers.length) return;

      function setActive(layer) {
        layers.forEach(function (btn) {
          var active = btn === layer;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
      }

      layers.forEach(function (layer) {
        layer.addEventListener("mouseenter", function () {
          setActive(layer);
        });
        layer.addEventListener("focus", function () {
          setActive(layer);
        });
        layer.addEventListener("click", function () {
          setActive(layer);
        });
      });
    })();
  });
})();
