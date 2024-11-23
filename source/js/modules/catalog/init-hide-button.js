const FilterHideButtonText = {
  OPEN: 'Свернуть',
  CLOSE: 'Показать все',
};

const initHideButton = () => {
  const hideButton = document.querySelector('.filter__hide-button--outer');
  if (!hideButton) {
    return;
  }

  const filterContent = document.querySelector('.filter__content');
  const buttonText = hideButton.querySelector('.filter__hide-button-text');

  hideButton.addEventListener('click', () => {
    if (filterContent.classList.contains('js-is-open')) {
      filterContent.classList.remove('js-is-open');
      hideButton.classList.remove('js-is-open');
      buttonText.textContent = FilterHideButtonText.CLOSE;
      filterContent.style.maxHeight = 0;
    } else {
      filterContent.classList.add('js-is-open');
      hideButton.classList.add('js-is-open');
      buttonText.textContent = FilterHideButtonText.OPEN;
      filterContent.style.maxHeight = `${filterContent.scrollHeight}px`;
    }
  });
};

export {initHideButton};
