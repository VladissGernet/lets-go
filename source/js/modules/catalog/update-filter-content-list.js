import {createAlphabetList} from './create-alphabet';
import {createListOfCountriesArray} from './create-list-of-countries-array';

const updateFilterContentHeight = (filterContent) => {
  if (filterContent.classList.contains('js-is-open')) {
    const newHeight = document.querySelector('.filter__content').scrollHeight;

    filterContent.style.maxHeight = `${newHeight}px`;
  }
};

const updateFilterContentList = (filterContent) => {
  // Создаю список стран
  createAlphabetList(filterContent, createListOfCountriesArray());

  // Обновляем высоту контента
  updateFilterContentHeight(filterContent);
};

export {updateFilterContentList};
