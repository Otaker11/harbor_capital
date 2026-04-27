/* ============================================================
   portfolio.js — Interactividad de las portfolio cards
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Tilt sutil en las cards (desktop only) ── */
  const cards = document.querySelectorAll('.portfolio-card');

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        // Máximo 4 grados de inclinación
        const rotateX = ((y - cy) / cy) * -4;
        const rotateY = ((x - cx) / cx) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        card.style.transition = 'transform 0.1s linear';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease';
      });
    });
  }

  /* ── Lazy reveal de imágenes del portfolio con GSAP (si está disponible) ── */
  function initGsapReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Imagen grande (featured card) — parallax sutil hacia arriba al scroll
    const featuredImg = document.querySelector('.portfolio-card--featured .portfolio-card__img-wrap img');
    if (featuredImg) {
      gsap.fromTo(
        featuredImg,
        { yPercent: 8 },
        {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.portfolio-card--featured',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    // Cards pequeñas — fade + slide up al entrar en viewport
    const smallCards = document.querySelectorAll('.portfolio-card--large, .portfolio-card--small');
    smallCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  // GSAP puede cargarse con defer, así que esperamos a que esté listo
  if (typeof gsap !== 'undefined') {
    initGsapReveal();
  } else {
    window.addEventListener('load', initGsapReveal);
  }

});