import {countriesByContinent} from './catalog-mock';
import {createAlphabetList} from './create-alphabet';
import {sortCountriesInSelectedContinent} from './sort-countries';

const updateFilterContentList = (filterContent, filterContinents) => {
  // Создаю массив из выбранных континентов
  const selectedContinentArray = createArrayOfSelectedContinents(filterContinents);

  // Создаю массив из стран выбранных континентов
  const countriesArrayOfSelectedContinent = createCountriesArrayOfSelectedContinent(selectedContinentArray);

  // Создаю список стран
  const alphabetArray = sortCountriesInSelectedContinent(countriesArrayOfSelectedContinent);

  // Создаю список стран
  createAlphabetList(filterContent, alphabetArray);

  // Обновляем высоту контента
  updateFilterContentHeight(filterContent);
};

const updateFilterContentHeight = (filterContent) => {
  if (filterContent.classList.contains('js-is-open')) {
    const newHeight = document.querySelector('.filter__content').scrollHeight;

    filterContent.style.maxHeight = `${newHeight}px`;
  }
};

const createCountriesArrayOfSelectedContinent = (selectedContinentArray) => {
  // Создаю массив стран из выбранных континентов
  let countriesArrayOfSelectedContinent = [];

  if (selectedContinentArray.length !== 0) {
    selectedContinentArray.forEach((item) => {
      countriesArrayOfSelectedContinent = [...countriesArrayOfSelectedContinent, ...countriesByContinent[item]];
    });
  } else {
    // Если нет выбранных континентов, то выводим все страны
    Object.values(countriesByContinent).forEach((item) => {
      countriesArrayOfSelectedContinent = [...countriesArrayOfSelectedContinent, ...item];
    });
  }
  return countriesArrayOfSelectedContinent;
};

const createArrayOfSelectedContinents = (filterContinents) => {
  const selectedElementContinentsArray = filterContinents.querySelectorAll('.filter__continent--active');
  const selectedContinentArray = [];
  selectedElementContinentsArray.forEach((item) => {
    selectedContinentArray.push(item.querySelector('button').textContent);
  });
  return selectedContinentArray;
};

export {updateFilterContentList};
