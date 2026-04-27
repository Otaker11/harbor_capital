document.addEventListener("DOMContentLoaded", () => {
  const AUTOPLAY_DELAY = 8000;
  const navLines = document.querySelectorAll(".hero-nav__line");

  function setActiveNavLine(index) {
    navLines.forEach((line, i) => {
      const progress = line.querySelector(".hero-nav__progress");

      line.classList.toggle("active", i === index);

      progress.style.transition = "none";
      progress.style.width = "0%";

      void progress.offsetWidth;

      if (i === index) {
        progress.style.transition = `width ${AUTOPLAY_DELAY}ms linear`;
        progress.style.width = "100%";
      }
    });
  }

  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    speed: 1200,
    watchSlidesProgress: true, // 👈 clave para parallax manual

    autoplay: {
      delay: AUTOPLAY_DELAY,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    on: {
      init(swiper) {
        setActiveNavLine(swiper.realIndex);
      },

      slideChange(swiper) {
        setActiveNavLine(swiper.realIndex);
      },

      progress(swiper) {
        swiper.slides.forEach((slide) => {
          const progress = slide.progress;

          const bg = slide.querySelector(".hero-slide__bg");
          if (!bg) return;

          const translate = Math.max(Math.min(progress * 12, 12), -12);

          bg.style.transform = `translate3d(${translate}%, 0, 0)`;
        });
      },

      setTransition(swiper, speed) {
        swiper.slides.forEach((slide) => {
          const bg = slide.querySelector(".hero-slide__bg");
          if (!bg) return;

          bg.style.transition = `${speed}ms ease`;
        });
      },
    },
  });

  navLines.forEach((line, index) => {
    line.addEventListener("click", () => heroSwiper.slideToLoop(index));
  });

  const scrollIndicator = document.querySelector(".hero-scroll");

  if (scrollIndicator) {
    let hidden = false;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 80 && !hidden) {
          scrollIndicator.style.opacity = "0";
          scrollIndicator.style.pointerEvents = "none";
          hidden = true;
        } else if (window.scrollY <= 80 && hidden) {
          scrollIndicator.style.opacity = "";
          scrollIndicator.style.pointerEvents = "";
          hidden = false;
        }
      },
      { passive: true },
    );
  }
});
