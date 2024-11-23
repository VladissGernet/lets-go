// Mock данные из макета.
import {countriesByContinent} from './catalog-mock';

import {sortCountriesInSelectedContinent} from './sort-countries';
import {createAlphabetList} from './create-alphabet-list';
import {createFilterContinentsButtons} from './create-filter-continents-buttons';
import {initHideButton} from './init-hide-button';
import {createTabletAlphabet} from './create-tablet-alphabet';
import {initTabletAlphabetLetters} from './init-tablet-alphabet-letters';

const INITIAL_ACTIVATED_CONTINENT = 'Европа';

const initCountriesFilter = () => {
  const filter = document.querySelector('.filter');
  if (!filter) {
    return;
  }
  // Добавляем кнопки континентов
  createFilterContinentsButtons(filter, countriesByContinent, INITIAL_ACTIVATED_CONTINENT);

  // Получаем страны из выбранного континента и создаем элементы с буквой и списком стран
  const filterContent = filter.querySelector('.filter__content');

  const selectedContinent = countriesByContinent[INITIAL_ACTIVATED_CONTINENT];
  const sortedCountries = sortCountriesInSelectedContinent(selectedContinent);

  // Устанавливаю высоту контента фильтра для скрытия.
  filterContent.style.maxHeight = 0;

  // Создаем алфавитный список Desktop
  createAlphabetList(filterContent, sortedCountries);

  // Активирую кнопку раскрытия/скрытия списка.
  initHideButton();

  // Создаем алфавит на планшете из букв на основании стран
  createTabletAlphabet(sortedCountries);

  // Активирую кнопки букв алфавита для планшета
  initTabletAlphabetLetters(sortedCountries);
};

export {initCountriesFilter};
