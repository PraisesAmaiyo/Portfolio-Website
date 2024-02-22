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
    delay: 1000,
    disableOnInteraction: false,
  },
});

// var swiper = new Swiper('.swiper-2', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
// });
