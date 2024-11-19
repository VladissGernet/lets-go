import {Swiper} from '../vendor/swiper.min';

const SLIDES_PER_VIEW = 3;
const SPACE_BETWEEN = 10;
const AUTOPLAY_DELAY = 3000;
const SwiperBreakpoints = {
  MOBILE: 300,
  TABLET: 768,
};

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
    autoplay: {
      delay: AUTOPLAY_DELAY,
      disableOnInteraction: false,
    },
    breakpoints: {
      [SwiperBreakpoints.TABLET]: {
        enabled: true,
      },
      [SwiperBreakpoints.MOBILE]: {
        enabled: false,
      },
    },
  });
};

export {initDirectionsSwiper};
