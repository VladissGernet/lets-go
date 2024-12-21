const DESKTOP_WIDTH = 1024;

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
    if (window.innerWidth >= DESKTOP_WIDTH) {
      return;
    }
    if (evt.target.closest('.header') === null) {
      headerBurgerButton.click();
    }
  });
};

export {initOutsideOfMenuClick};
