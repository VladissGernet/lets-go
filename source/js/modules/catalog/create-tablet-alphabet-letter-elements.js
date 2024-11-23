const createTabletAlphabetLetterElements = (sortedCountries) => {
  const alphabetListFragment = document.createDocumentFragment();

  sortedCountries.forEach((letterArray, index) => {
    const [letter] = letterArray;
    const newLetterItem = document.createElement('li');
    const newLetterButton = document.createElement('button');
    newLetterButton.classList.add('filter__tablet-letter-button');
    newLetterButton.type = 'button';
    newLetterButton.textContent = letter;
    newLetterButton.dataset.letterIndex = index;

    // Первой букве всегда вешаю класс
    if (index === 0) {
      newLetterButton.classList.add('js-letter-active');
    }

    newLetterItem.appendChild(newLetterButton);
    alphabetListFragment.appendChild(newLetterItem);
  });

  return alphabetListFragment;
};

export {createTabletAlphabetLetterElements};
