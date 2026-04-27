document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("counters.js: GSAP or ScrollTrigger not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.getElementById("counter-section");
  if (!section) return;

  /* ── Fade-up stagger con fromTo para garantizar estado inicial ── */
  gsap.fromTo(
    ".counter-item",
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#counter-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    },
  );

  /* ── Numeric counters ── */
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute("data-target") ?? "0");
    const suffix = counter.getAttribute("data-suffix") ?? "";
    if (isNaN(target)) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: "power2.out",
      snap: { val: 1 },
      scrollTrigger: {
        trigger: "#counter-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate() {
        counter.textContent =
          Math.round(obj.val).toLocaleString("en-US") + suffix;
      },
      onComplete() {
        counter.textContent = target.toLocaleString("en-US") + suffix;
      },
    });
  });
});
