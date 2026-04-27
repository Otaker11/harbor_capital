/* ============================================================
   hero.js — Swiper hero slider con parallax + nav lines
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const AUTOPLAY_DELAY = 6000; // ms por slide

  /* ── Nav lines (los indicadores de progreso debajo del hero) ── */
  const navLines = document.querySelectorAll('.hero-nav__line');

  function setActiveNavLine(index) {
    navLines.forEach((line, i) => {
      const progress = line.querySelector('.hero-nav__progress');
      line.classList.toggle('active', i === index);

      // Reinicia la animación de progreso
      progress.style.transition = 'none';
      progress.style.width = '0%';

      // Fuerza reflow para que el reset sea visible
      void progress.offsetWidth;

      if (i === index) {
        progress.style.transition = `width ${AUTOPLAY_DELAY}ms linear`;
        progress.style.width = '100%';
      }
    });
  }

  /* ── Swiper ── */
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 1000,
    parallax: true,

    autoplay: {
      delay: AUTOPLAY_DELAY,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    on: {
      init(swiper) {
        setActiveNavLine(swiper.realIndex);
      },
      slideChange(swiper) {
        setActiveNavLine(swiper.realIndex);
      },
      // Pausa la barra de progreso cuando el autoplay está en pausa
      autoplayPause(swiper) {
        const activeProgress = navLines[swiper.realIndex]?.querySelector('.hero-nav__progress');
        if (activeProgress) {
          activeProgress.style.animationPlayState = 'paused';
          // Congela la transición en la posición actual
          const computed = getComputedStyle(activeProgress).width;
          const parentWidth = activeProgress.parentElement.offsetWidth;
          const pct = (parseFloat(computed) / parentWidth) * 100;
          activeProgress.style.transition = 'none';
          activeProgress.style.width = `${pct}%`;
        }
      },
      autoplayResume(swiper) {
        // Reinicia la barra desde el inicio al reanudar (comportamiento más limpio)
        setActiveNavLine(swiper.realIndex);
      },
    },
  });

  /* ── Click en nav lines para ir al slide ── */
  navLines.forEach((line, index) => {
    line.addEventListener('click', () => {
      heroSwiper.slideTo(index);
    });
    line.style.cursor = 'pointer';
  });

  /* ── Scroll indicator: aparece en desktop, se oculta al hacer scroll ── */
  const scrollIndicator = document.querySelector('.hero-scroll');
  if (scrollIndicator) {
    let hidden = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80 && !hidden) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
        hidden = true;
      } else if (window.scrollY <= 80 && hidden) {
        scrollIndicator.style.opacity = '';
        scrollIndicator.style.pointerEvents = '';
        hidden = false;
      }
    }, { passive: true });
  }

});