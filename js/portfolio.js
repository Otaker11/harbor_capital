/* ============================================================
   portfolio.js — GSAP ScrollTrigger for portfolio + about
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── Mobile portfolio cards: individual fade-up on scroll ── */
  document.querySelectorAll(".portfolio-mobile__card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 32,
      duration: 0.65,
      ease: "power2.out",
      delay: i * 0.08,
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  });

  /* ── About section heading ── */
  gsap.from("#leadership .section-heading", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#leadership",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  /* ── About avatar pop-in ── */
  gsap.from(".about__avatar", {
    opacity: 0,
    scale: 0.85,
    duration: 0.7,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: "#leadership",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    delay: 0.3,
  });

  /* ── About float card ── */
  gsap.from(".about__float-card", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__visual",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    delay: 0.4,
  });
});
