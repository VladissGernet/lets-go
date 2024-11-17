import {Swiper} from 'swiper';

const initDirectionsSwiper = () => {
  return new Swiper('.directions__swiper', {
    wrapperClass: 'directions__swiper-wrapper',
    slideClass: 'directions__slide',
    slidePrevClass: 'directions__slide--prev',
    slideActiveClass: 'directions__slide--active',
    slideNextClass: 'directions__slide--next',
    direction: 'vertical',
    slidesPerView: '3',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
  });
};

export {initDirectionsSwiper};
