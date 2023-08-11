var swiper = new Swiper(".review-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function dropDowns() {
  const qaItem = document.querySelectorAll(".qa-item");

  qaItem.forEach((element) => {
    const expand = element.querySelector(".expand");

    expand.addEventListener("click", () => {
      element.classList.toggle("_active");
    });
  });
}

dropDowns();

function burgerMenu() {
  const iconMenu = document.querySelector(".menu-ic-wr");

  if (iconMenu) {
    const menuBody = document.querySelector(".nav-links");
    const header = document.querySelector("header");
    iconMenu.addEventListener("click", function () {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      header.classList.toggle("_active");
    });
  }
}

burgerMenu();

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const toTop = document.querySelector(".back-top-btn");

  header.classList.toggle("sticky", window.scrollY > 100);
  toTop.classList.toggle("_active", window.scrollY > 100);
});

function scrollToTop() {
  const toTop = document.querySelector(".back-top-btn");

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

scrollToTop();

function scrollToTarget() {
  const menuLinks = document.querySelectorAll(".mn_link[data-scroll]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((element) => {
      element.addEventListener("click", scrollToSection);
    });
  }

  function scrollToSection(e) {
    const menuLink = e.target;
    const menuBody = document.querySelector(".nav-links");
    const header = document.querySelector("header");
    const iconMenu = document.querySelector(".menu-ic-wr");

    if (
      menuLink.dataset.scroll &&
      document.querySelector(menuLink.dataset.scroll)
    ) {
      const scrollSection = document.querySelector(menuLink.dataset.scroll);
      const scrollToSectionVal =
        scrollSection.getBoundingClientRect().top + pageYOffset - 200;

      window.scrollTo({
        top: scrollToSectionVal,
        behavior: "smooth",
      });
      e.preventDefault();
    }

    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
      header.classList.remove("_active");
    }
  }
}

scrollToTarget();
