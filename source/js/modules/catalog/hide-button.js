const initHideButton = () => {
  const hideButton = document.querySelector('.filter__hide-button');
  if (!hideButton) {
    return;
  }

  const filterContent = document.querySelector('.filter__content');
  hideButton.addEventListener('click', () => {
    if (filterContent.classList.contains('js-is-open')) {
      filterContent.classList.remove('js-is-open');
      filterContent.style.maxHeight = 0;
    } else {
      filterContent.classList.add('js-is-open');
      filterContent.style.maxHeight = `${filterContent.scrollHeight}px`;
    }
  });
};

export {initHideButton};
