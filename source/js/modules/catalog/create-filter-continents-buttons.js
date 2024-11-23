import {updateFilterContentList} from './update-filter-content-list';
import {createTabletAlphabet} from './create-tablet-alphabet';

const createContinentsButtons = (countriesData, selectedContinent, filterContinentButtonClone) => {
  const continentsDocumentFragment = document.createDocumentFragment();

  Object.keys(countriesData).forEach((continent) => {
    const newItem = filterContinentButtonClone.cloneNode(true);
    newItem.querySelector('button').textContent = continent;

    if (continent === selectedContinent) {
      newItem.classList.add('filter__continent--active');
    }
    continentsDocumentFragment.appendChild(newItem);
  });

  return continentsDocumentFragment;
};

const createFilterContinentsButtons = (filter, countriesData, selectedContinent) => {
  const filterContent = filter.querySelector('.filter__content');
  const filterContinents = filter.querySelector('.filter__continents');
  const filterContinentButtonCover = filterContinents.querySelector('.filter__continent');
  const filterContinentButtonClone = filterContinentButtonCover.cloneNode(true);

  // Добавляем кнопки континентов
  filterContinents.innerHTML = '';
  filterContinents.appendChild(createContinentsButtons(countriesData, selectedContinent, filterContinentButtonClone));

  // Добавляем обработчик клика
  filterContinents.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.tagName !== 'BUTTON') {
      return;
    }
    const buttonItem = target.closest('li');

    // Обновляем активный континент
    if (buttonItem.classList.contains('filter__continent--active')) {
      buttonItem.classList.remove('filter__continent--active');
    } else {
      buttonItem.classList.add('filter__continent--active');
    }

    // Проверяем, открыт ли контент
    const isContendShown = filterContent.classList.contains('js-is-open');
    if (!isContendShown) {
      return;
    }

    // Обновляем контент desktop
    updateFilterContentList(filterContent);

    // Обновляем контент tablet
  });
};

export {createFilterContinentsButtons};
