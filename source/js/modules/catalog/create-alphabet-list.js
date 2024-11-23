const createAlphabetList = (filterContent, sortedCountries) => {
  const filterContentFragment = document.createDocumentFragment();
  filterContent.innerHTML = '';

  sortedCountries.forEach((letterItem) => {
    const [letter, countriesArray] = letterItem;
    const newItem = document.createElement('li');
    newItem.classList.add('filter__item');

    // Добавляем букву
    const newItemLetter = document.createElement('span');
    newItemLetter.classList.add('filter__letter');
    newItemLetter.textContent = letter;
    newItem.appendChild(newItemLetter);

    // Добавляем список стран
    const countriesList = document.createElement('ul');
    countriesList.classList.add('filter__countries');
    countriesArray.forEach((country) => {
      const newCountryItem = document.createElement('li');
      newCountryItem.classList.add('filter__country');
      const newCountryButton = document.createElement('button');
      newCountryButton.classList.add('filter__country-button');
      newCountryButton.type = 'button';
      newCountryButton.textContent = country;
      newCountryItem.appendChild(newCountryButton);
      countriesList.appendChild(newCountryItem);
    });
    newItem.appendChild(countriesList);
    filterContentFragment.appendChild(newItem);
  });

  filterContent.appendChild(filterContentFragment);
};

export {createAlphabetList};
