var swiper = new Swiper(".home", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      576: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      992: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      1200: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
  },
});
