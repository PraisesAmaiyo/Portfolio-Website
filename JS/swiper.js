// Websites
var swiper = new Swiper('.swiper-1', {
  slidesPerView: 1,
  spaceBetween: 45,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// graphics design
var swiper = new Swiper('.swiper-2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //   },
});

// Testimonial;
var swiper = new Swiper('.swiper-3', {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
