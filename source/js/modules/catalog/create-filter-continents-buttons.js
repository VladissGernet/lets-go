import {countriesByContinent} from './catalog-mock';
import {createAlphabetList} from './create-alphabet';
import {sortCountriesInSelectedContinent} from './sort-countries';

const createFilterContinentsButtons = (filter, countriesData, selectedContinent) => {
  const filterContent = filter.querySelector('.filter__content');
  const filterContinents = filter.querySelector('.filter__continents');
  const filterContinentButtonCover = filterContinents.querySelector('.filter__continent');
  const filterContinentButtonClone = filterContinentButtonCover.cloneNode(true);

  const continentsDocumentFragment = document.createDocumentFragment();

  // Добавляем кнопки континентов
  Object.keys(countriesData).forEach((continent) => {
    const newItem = filterContinentButtonClone.cloneNode(true);
    newItem.querySelector('button').textContent = continent;

    if (continent === selectedContinent) {
      newItem.classList.add('filter__continent--active');
    }
    continentsDocumentFragment.appendChild(newItem);
  });
  filterContinents.innerHTML = '';

  filterContinents.appendChild(continentsDocumentFragment);

  // Добавляем обработчик клика
  filterContinents.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.tagName === 'BUTTON' && !target.closest('li').classList.contains('filter__continent--active')) {
      // Обновляем активный континент
      filterContinents.querySelector('.filter__continent--active').classList.remove('filter__continent--active');
      target.parentNode.classList.add('filter__continent--active');

      // Сортируем страны
      const sortedCountries = sortCountriesInSelectedContinent(countriesByContinent[target.textContent]);
      createAlphabetList(filterContent, sortedCountries);

      // Обновляем высоту контента
      if (filterContent.classList.contains('js-is-open')) {
        const allElements = filterContent.querySelectorAll('.filter__item');
        let height = 0;
        allElements.forEach((element) => {
          height += element.offsetHeight;
        });

        filterContent.style.height = `${height}px`;
      }
    }
  });
};

export {createFilterContinentsButtons};
