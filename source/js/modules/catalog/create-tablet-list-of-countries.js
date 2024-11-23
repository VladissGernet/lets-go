const createTabletListOfCountries = (countriesArray) => {
  const listFragment = document.createDocumentFragment();

  countriesArray.forEach((country) => {
    const newCountryItem = document.createElement('li');
    const newCountryButton = document.createElement('button');
    newCountryButton.classList.add('filter__tablet-country-button');
    newCountryButton.type = 'button';
    newCountryButton.textContent = country;
    newCountryItem.appendChild(newCountryButton);
    listFragment.appendChild(newCountryItem);
  });

  return listFragment;
};

export {createTabletListOfCountries};
