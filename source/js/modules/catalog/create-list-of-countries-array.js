import {countriesByContinent} from './catalog-mock';
import {sortCountriesInSelectedContinent} from './sort-countries';

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

const createListOfCountriesArray = () => {
  const filterContinents = document.querySelector('.filter__continents');
  // Создаю массив из выбранных континентов
  const selectedContinentArray = createArrayOfSelectedContinents(filterContinents);

  // Создаю массив из стран выбранных континентов
  const countriesArrayOfSelectedContinent = createCountriesArrayOfSelectedContinent(selectedContinentArray);

  // Создаю список стран
  return sortCountriesInSelectedContinent(countriesArrayOfSelectedContinent);
};

export {createListOfCountriesArray};
