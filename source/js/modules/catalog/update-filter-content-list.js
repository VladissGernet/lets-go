import {createAlphabetList} from './create-alphabet-list';
import {createListOfCountriesArray} from './create-list-of-countries-array';
import {createTabletAlphabet} from './create-tablet-alphabet';

const updateFilterContentHeight = (filterContent) => {
  if (filterContent.classList.contains('js-is-open')) {
    const newHeight = document.querySelector('.filter__content').scrollHeight;

    filterContent.style.maxHeight = `${newHeight}px`;
  }
};

const updateFilterContentList = (filterContent) => {
  // Создаю массив списка стран
  const listOfCountriesArray = createListOfCountriesArray();

  // Создаю список стран Desktop
  createAlphabetList(filterContent, listOfCountriesArray);

  // Создаю список стран Tablet
  createTabletAlphabet(listOfCountriesArray);

  // Обновляем высоту контента
  updateFilterContentHeight(filterContent);
};

export {updateFilterContentList};
