document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");

  const blockScroll = (e) => e.preventDefault();

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );

  function openMenu() {
    const sbWidth = getScrollbarWidth();
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${sbWidth}px`,
    );

    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    navbar.classList.add("menu-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");

    window.addEventListener("wheel", blockScroll, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    navbar.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");

    document.documentElement.style.removeProperty("--scrollbar-width");
    window.removeEventListener("wheel", blockScroll);
    window.removeEventListener("touchmove", blockScroll);
  }

  toggle.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        closeMenu();
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target)
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 380);
      } else {
        closeMenu();
      }
    });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
});
