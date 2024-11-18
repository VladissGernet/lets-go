import {Swiper} from 'swiper';

const SLIDES_PER_VIEW = 3;
const SPACE_BETWEEN = 10;

const initDirectionsSwiper = () => {
  return new Swiper('.directions__swiper', {
    wrapperClass: 'directions__swiper-wrapper',
    slideClass: 'directions__slide',
    slidePrevClass: 'directions__slide--prev',
    slideActiveClass: 'directions__slide--active',
    slideNextClass: 'directions__slide--next',
    direction: 'vertical',
    slidesPerView: SLIDES_PER_VIEW,
    spaceBetween: SPACE_BETWEEN,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
  });
};

export {initDirectionsSwiper};
