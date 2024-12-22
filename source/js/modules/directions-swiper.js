import {Swiper} from '../vendor/swiper.min';

import {debounce} from '../vendor/debounce.js';

const SLIDES_PER_VIEW = 3;
const SPACE_BETWEEN = 10;
const AUTOPLAY_DELAY = 3000;
const PAGE_RELOAD_DELAY = 1000;
const TABLET_WIDTH = 768;

const breakpoint = window.matchMedia(`(min-width:${TABLET_WIDTH}px)`);

const onPageResize = () => {
  location.reload();
};
const throttledPageResizing = debounce(onPageResize, PAGE_RELOAD_DELAY);

// Функция для создания экземпляра Swiper
const createSwiper = () => {
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
  });
};

const initDirectionsSwiper = () => {
  const isSwiperOnPage = document.querySelector('.directions__swiper');
  if (!isSwiperOnPage) {
    return;
  }

  // Проверка на ширину экрана
  // Swiper активизируется только на desktop и tablet разметке
  if (breakpoint.matches) {
    createSwiper();
  }
  const initialPageWidthIsNotMobile = breakpoint.matches;
  // Проверка на изменение ширины экрана
  window.addEventListener('resize', () => {
    const newPageWidthIsNotMobile = breakpoint.matches;
    if (initialPageWidthIsNotMobile !== newPageWidthIsNotMobile) {
      throttledPageResizing();
    }
  });
};

export {initDirectionsSwiper};
