document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 700,
    easing: "ease-out",
    offset: 80,
  });

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  window.lenisInstance = lenis;
});
