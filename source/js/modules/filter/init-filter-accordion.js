const TABLET_WIDTH_MIN = 768;
const TABLET_WIDTH_MAX = 1023;
const DESKTOP_WIDTH = 1024;

const breakpointDesktop = window.matchMedia(`(min-width:${DESKTOP_WIDTH}px)`);
const breakpointTablet = window.matchMedia(`(min-width:${TABLET_WIDTH_MIN}px) and (max-width:${TABLET_WIDTH_MAX}px)`);

const activeAccordionElements = (accordion) => {
  const accordionElements = accordion.querySelectorAll('.accordion__element');
  accordionElements.forEach((element) => {
    element.classList.add('is-active');
  });
};

const hideAccordionElements = (accordion) => {
  const accordionElements = accordion.querySelectorAll('.accordion__element');
  accordionElements.forEach((element) => {
    element.classList.remove('is-active');
  });
};

const defineTypeOfWindow = () => {
  let typeOfWindow = '';
  if (breakpointDesktop.matches) {
    typeOfWindow = 'desktop';
  } else if (breakpointTablet.matches) {
    typeOfWindow = 'tablet';
  } else {
    typeOfWindow = 'mobile';
  }
  return typeOfWindow;
};

const initFilterAccordion = () => {
  const accordion = document.querySelector('.accordion');
  if (!accordion) {
    return;
  }

  // Проверка на изменение ширины экрана
  let initialPageWidthType = defineTypeOfWindow();

  window.addEventListener('resize', () => {
    const newPageWidthType = defineTypeOfWindow();
    if (newPageWidthType !== initialPageWidthType) {
      if (newPageWidthType === 'desktop' || newPageWidthType === 'mobile') {
        initialPageWidthType = newPageWidthType;
        hideAccordionElements(accordion);
      } else if (newPageWidthType === 'tablet') {
        initialPageWidthType = newPageWidthType;
        activeAccordionElements(accordion);
      }
    }
  });

  // Первоначальная ширина экрана
  if (initialPageWidthType === 'tablet') {
    activeAccordionElements(accordion);
  }
};

export {initFilterAccordion};
