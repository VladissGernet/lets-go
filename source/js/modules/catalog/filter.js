import {sortCountriesInSelectedContinent} from './sort-countries';
import {createAlphabetList} from './create-alphabet';
import {createFilterContinentsButtons} from './create-filter-continents-buttons';
import {countriesByContinent} from './catalog-mock';

const INITIAL_ACTIVATED_CONTINENT = 'Европа';

const initCountriesFilter = () => {
  const filter = document.querySelector('.filter');
  if (!filter) {
    return;
  }
  // Добавляем кнопки континентов
  createFilterContinentsButtons(filter, countriesByContinent, INITIAL_ACTIVATED_CONTINENT);

  // Получаем страны из выбранного континента и создаем объект с буквой и списком стран
  const filterContent = filter.querySelector('.filter__content');

  const selectedContinent = countriesByContinent[INITIAL_ACTIVATED_CONTINENT];
  const sortedCountries = sortCountriesInSelectedContinent(selectedContinent);

  // Устанавливаю высоту контента фильтра для скрытия.
  filterContent.style.height = 0;

  // Создаем алфавитный список
  createAlphabetList(filterContent, sortedCountries);
};

export {initCountriesFilter};
