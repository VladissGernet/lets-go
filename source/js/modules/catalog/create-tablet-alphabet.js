import {createTabletListOfCountries} from './create-tablet-list-of-countries';
import {createTabletAlphabetLetterElements} from './create-tablet-alphabet-letter-elements';

const createTabletAlphabet = (sortedCountries) => {
  const tabletContent = document.querySelector('.filter__tablet-content');
  const alphabetList = tabletContent.querySelector('.filter__tablet-alphabet');
  const selectedLetterContentList = tabletContent.querySelector('.filter__selected-letter-content');

  // Очищаю списки
  alphabetList.innerHTML = '';
  selectedLetterContentList.innerHTML = '';

  // Создаем элементы букв
  const alphabetListFragment = createTabletAlphabetLetterElements(sortedCountries);

  // Создаем элементы списка стран по первой букве
  const selectedLetterContentListFragment = createTabletListOfCountries(sortedCountries[0][1]);

  alphabetList.appendChild(alphabetListFragment);
  selectedLetterContentList.appendChild(selectedLetterContentListFragment);
};

export {createTabletAlphabet};
