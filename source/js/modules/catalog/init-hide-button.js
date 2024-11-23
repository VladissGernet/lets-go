import {updateFilterContentList} from './update-filter-content-list';

const FilterHideButtonText = {
  OPEN: 'Свернуть',
  CLOSE: 'Показать все',
};

const initHideButton = () => {
  const hideButton = document.querySelector('.filter__hide-button--outer');
  const hideButtonInner = document.querySelector('.filter__hide-button--inner');
  if (!hideButton) {
    return;
  }

  const filterContent = document.querySelector('.filter__content');
  const buttonText = hideButton.querySelector('.filter__hide-button-text');
  const tabletContentWrapper = document.querySelector('.filter__tablet-content-wrapper');
  const filterHeader = document.querySelector('.filter__header');

  const onHideButtonClick = () => {
    if (filterContent.classList.contains('js-is-open')) {
      filterContent.classList.remove('js-is-open');
      hideButton.classList.remove('js-is-open');
      tabletContentWrapper.classList.remove('js-is-open');
      filterHeader.classList.remove('js-is-open');
      buttonText.textContent = FilterHideButtonText.CLOSE;
      filterContent.style.maxHeight = 0;
    } else {
      // Обновляем список на основе выбранных фильтров
      updateFilterContentList(filterContent);

      filterContent.classList.add('js-is-open');
      hideButton.classList.add('js-is-open');
      tabletContentWrapper.classList.add('js-is-open');
      filterHeader.classList.add('js-is-open');
      buttonText.textContent = FilterHideButtonText.OPEN;
      filterContent.style.maxHeight = `${filterContent.scrollHeight}px`;
    }
  };

  hideButton.addEventListener('click', onHideButtonClick);
  hideButtonInner.addEventListener('click', onHideButtonClick);
};

export {initHideButton};
