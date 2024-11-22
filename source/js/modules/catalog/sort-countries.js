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

export {sortCountriesInSelectedContinent};
