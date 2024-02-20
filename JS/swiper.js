// Websites
var swiper = new Swiper('.swiper-1', {
  slidesPerView: 1,
  spaceBetween: 30,
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
  slidesPerView: '2',
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// var swiper = new Swiper('.swipers', {
//   slidesPerView: 3,
//   //   loop: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
