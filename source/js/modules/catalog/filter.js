const countriesByContinent = {
  'Европа': [
    'Австрия',
    'Албания',
    'Андорра',
    'Белоруссия',
    'Бельгия',
    'Болгария',
    'Великобритания',
    'Венгрия',
    'Германия',
    'Греция',
    'Грузия',
    'Дания',
    'Ирландия',
    'Исландия',
    'Испания',
    'Италия',
    'Казахстан',
    'Латвия',
    'Литва',
    'Люксембург',
    'Мальта',
    'Польша',
    'Португалия',
    'Румыния',
    'Россия',
    'Сербия',
    'Словакия',
    'Словения',
    'Украина',
    'Швейцария',
    'Швеция',
    'Босния и Герцеговина',
    'Норвегия'
  ],
  'Азия': [
    'Бруней',
    'Камбоджа',
    'Катар',
    'Кения',
    'Кирибати',
    'Ливия',
    'Азербайджан',
    'Армения',
    'Афганистан',
    'Бангладеш',
    'Бахрейн',
    'Бутан',
    'Восточный Тимор',
    'Израиль',
    'Индия',
    'Индонезия',
    'Иордания',
    'Ирак',
    'Иран',
    'Казахстан',
    'Кипр',
    'Киргизия',
    'Китай',
    'Лаос',
    'Ливан',
    'ОАЭ',
    'Оман',
    'Пакистан',
    'Таджикистан',
    'Таиланд',
    'Турция'
  ],
  'Америка': [
    'Антигуа и Барбуда',
    'Гаити',
    'Гренада',
    'Гондурас',
    'Гватемала',
    'Антигуа и Барбуда',
    'Аргентина',
    'Багамские Острова',
    'Барбадос',
    'Белиз',
    'Бразилия',
    'Венесуэла',
    'Гаити',
    'Гренада',
    'Гайана',
    'Колумбия',
    'Никарагуа',
    'Панама',
    'Парагвай',
    'Перу',
    'Сальвадор',
    'США'
  ],
  'Острова': [
    'Австралия',
    'Вануату',
    'Маврикий',
    'Мальдивы',
    'Науру',
    'Самоа',
    'Сейшелы',
    'Тонга',
    'Фиджи',
    'Япония',
    'Кабо-Верде',
    'Мадагаскар',
    'Палау',
    'Папуа - Новая Гвинея',
    'Шри-Ланка'
  ],
};

const INITIAL_ACTIVATED_CONTINENT = 'Европа';

const createFilterContinentsButtons = (filter) => {
  if (!filter) {
    return;
  }

  const filterContinents = filter.querySelector('.filter__continents');
  const filterContinentButtonCover = filterContinents.querySelector('.filter__continent');
  const filterContinentButtonClone = filterContinentButtonCover.cloneNode(true);

  const continentsDocumentFragment = document.createDocumentFragment();

  Object.keys(countriesByContinent).forEach((continent) => {
    const newItem = filterContinentButtonClone.cloneNode(true);
    newItem.querySelector('button').textContent = continent;

    if (continent === INITIAL_ACTIVATED_CONTINENT) {
      newItem.classList.add('filter__continent--active');
    }
    continentsDocumentFragment.appendChild(newItem);
  });
  filterContinents.innerHTML = '';

  filterContinents.appendChild(continentsDocumentFragment);
};

const sortCountriesInSelectedContinent = (selectedContinent) => {
  // Сортируем массив стран
  selectedContinent.sort((a, b) => a.localeCompare(b));

  // Создаем массив для группировки
  const groupedCountries = [];
  let previousLetter = '';
  let currentIndex = -1;

  // Группируем страны по первой букве
  selectedContinent.forEach((country) => {
    // Получаем первую букву
    const firstLetter = country[0];

    // Инициализируем массив для соответствующей буквы, если его нет
    if (firstLetter !== previousLetter) {
      previousLetter = firstLetter;
      const newSubArray = [];
      const newArrayOfCountriesInSubArray = [];
      newSubArray.push(firstLetter);
      newSubArray.push(newArrayOfCountriesInSubArray);
      groupedCountries.push(newSubArray);
      currentIndex++;
    }

    // Добавляем страну в соответствующий букве массив
    groupedCountries[currentIndex][1].push(country);
  });

  return groupedCountries;
};

const createAlphabetList = (filterContent, sortedCountries) => {
  const filterContentFragment = document.createDocumentFragment();
  filterContent.innerHTML = '';

  sortedCountries.forEach((letterItem) => {
    const [letter, countriesArray] = letterItem;
    const newItem = document.createElement('li');

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

const initCountriesFilter = () => {
  const filter = document.querySelector('.filter');
  if (!filter) {
    return;
  }
  // Добавляем кнопки континентов
  createFilterContinentsButtons(filter);

  // Получаем страны из выбранного континента и создаем объект с буквой и списком стран
  const filterContent = filter.querySelector('.filter__content');
  const selectedContinent = countriesByContinent[INITIAL_ACTIVATED_CONTINENT];
  const sortedCountries = sortCountriesInSelectedContinent(selectedContinent);

  // Устанавливаю высоту контента фильтра для скрытия.
  filterContent.style.height = 0;

  // Создаем алфавитный список
  createAlphabetList(filterContent, sortedCountries);

  // Обновить высоту получившегося списка для кнопки "Свернуть фильтр"

  // Активировать кнопку "Свернуть фильтр" с помощью определения высоты.


};

export {initCountriesFilter};
