const TABLET_WIDTH_MIN = 768;
const TABLET_WIDTH_MAX = 1023;

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

const defineTypeOfWindow = (width) => {
  let typeOfWindow = '';
  if (width > TABLET_WIDTH_MAX) {
    typeOfWindow = 'desktop';
  } else if (width <= TABLET_WIDTH_MAX && width >= TABLET_WIDTH_MIN) {
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
  let initialPageWidthType = defineTypeOfWindow(window.innerWidth);

  window.addEventListener('resize', () => {
    const newPageWidthType = defineTypeOfWindow(window.innerWidth);
    if (newPageWidthType !== initialPageWidthType) {
      if (newPageWidthType === 'desktop' || newPageWidthType === 'mobile') {
        hideAccordionElements(accordion);
      } else if (newPageWidthType === 'tablet') {
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
