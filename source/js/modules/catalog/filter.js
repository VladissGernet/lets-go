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

const initCountriesFiler = () => {
  const filter = document.querySelector('.filter');
  if (!filter) {
    return;
  }
  createFilterContinentsButtons(filter);



  // Создать список из кнопок с континентами
  const continents = Object.keys(countriesByContinent);
  console.log(continents);



  // Первому континенту добавить класс active

  // Создать алфавитный список из страны состоящий из буквы сверху и
  // список стран по букве

  // Обновить высоту получившегося списка для кнопки "Свернуть фильтр"

  // Активировать кнопку "Свернуть фильтр" с помощью определения высоты.


};

export {initCountriesFiler};
