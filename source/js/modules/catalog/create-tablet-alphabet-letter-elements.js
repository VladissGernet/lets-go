const createTabletAlphabetLetterElements = (sortedCountries) => {
  const alphabetListFragment = document.createDocumentFragment();

  sortedCountries.forEach((letterArray) => {
    const [letter] = letterArray;
    const newLetterItem = document.createElement('li');
    const newLetterButton = document.createElement('button');
    newLetterButton.classList.add('filter__tablet-letter-button');
    newLetterButton.type = 'button';
    newLetterButton.textContent = letter;

    newLetterItem.appendChild(newLetterButton);
    alphabetListFragment.appendChild(newLetterItem);
  });

  return alphabetListFragment;
};

export {createTabletAlphabetLetterElements};
