/* ============================================================
   counters.js — Animación de números con IntersectionObserver
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const DURATION = 2000; // ms que tarda la animación

  /* Función de easing (ease-out-quad) */
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  /* Anima un único elemento counter */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutQuad(progress);
      const current = Math.round(eased * target);

      el.textContent = current.toLocaleString("en-US") + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("en-US") + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /* Solo anima los elementos que tengan data-count */
  const counterEls = document.querySelectorAll("[data-count]");
  if (!counterEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // anima solo una vez
        }
      });
    },
    { threshold: 0.5 },
  );

  counterEls.forEach((el) => observer.observe(el));
});
