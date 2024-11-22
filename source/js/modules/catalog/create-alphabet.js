const createAlphabetList = (filterContent, sortedCountries) => {
  const filterContentFragment = document.createDocumentFragment();
  filterContent.innerHTML = '';

  sortedCountries.forEach((letterItem) => {
    const [letter, countriesArray] = letterItem;
    const newItem = document.createElement('li');
    newItem.classList.add('filter__item');

    // Добавляем букву
    const newItemLetter = document.createElement('span');
    newItemLetter.textContent = letter;
    newItem.appendChild(newItemLetter);

    // Добавляем список стран
    const countriesList = document.createElement('ul');
    countriesArray.forEach((country) => {
      const newCountryItem = document.createElement('li');
      const newCountryButton = document.createElement('button');
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
