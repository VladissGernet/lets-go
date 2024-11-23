const createListOfCountries = (countriesArray) => {
  const listFragment = document.createDocumentFragment();

  countriesArray.forEach((country) => {
    const newCountryItem = document.createElement('li');
    const newCountryButton = document.createElement('button');
    newCountryButton.type = 'button';
    newCountryButton.textContent = country;
    newCountryItem.appendChild(newCountryButton);
    listFragment.appendChild(newCountryItem);
  });

  return listFragment;
};

const createTabletAlphabet = (tabletContent, sortedCountries) => {
  const alphabetList = tabletContent.querySelector('.filter__tablet-alphabet');
  const selectedLetterContentList = tabletContent.querySelector('.filter__selected-letter-content');

  // Создаем список букв из алфавита и список стран по первой букве.

  const alphabetListFragment = document.createDocumentFragment();
  let selectedLetterContentListFragment;

  // Создаем элементы букв
  sortedCountries.forEach((letterArray) => {
    const [letter] = letterArray;
    const newLetterItem = document.createElement('li');
    const newLetterButton = document.createElement('button');
    newLetterButton.type = 'button';
    newLetterButton.textContent = letter;

    newLetterItem.appendChild(newLetterButton);
    alphabetListFragment.appendChild(newLetterItem);
  });

  // Создаем элементы списка стран по первой букве
  selectedLetterContentListFragment = createListOfCountries(sortedCountries[0][1]);

  alphabetList.appendChild(alphabetListFragment);
  selectedLetterContentList.appendChild(selectedLetterContentListFragment);
};

export {createTabletAlphabet};
