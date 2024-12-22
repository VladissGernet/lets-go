const DESKTOP_WIDTH = 1024;

const breakpoint = window.matchMedia(`(min-width:${DESKTOP_WIDTH}px)`);

const initOutsideOfMenuClick = () => {
  const header = document.querySelector('.header');
  if (header === null) {
    return;
  }
  const isHeaderWithBurger = header.hasAttribute('data-header');
  if (!isHeaderWithBurger) {
    return;
  }

  const headerBurgerButton = header.querySelector('.header__toggle');

  document.addEventListener('click', (evt) => {
    if (breakpoint.matches) {
      return;
    }
    if (evt.target.closest('.header') === null && header.classList.contains('is-open')) {
      headerBurgerButton.click();
    }
  });
};

export {initOutsideOfMenuClick};
