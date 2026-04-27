/* ============================================================
   main.js — Init AOS + Lenis smooth scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── AOS ── */
  AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-out',
    offset: 80,
  });

  /* ── Lenis smooth scroll ── */
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  /* Expose lenis globally so other scripts can use it */
  window.lenisInstance = lenis;
});