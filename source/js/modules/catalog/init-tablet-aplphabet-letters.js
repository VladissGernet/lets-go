import {createTabletListOfCountries} from './create-tablet-list-of-countries';

const initTabletAlphabetLetters = (sortedCountries) => {
  const tabletAlphabet = document.querySelector('.filter__tablet-alphabet');

  tabletAlphabet.addEventListener('click', (evt) => {
    const selectedLetter = evt.target.closest('.filter__tablet-letter-button');
    if (!selectedLetter) {
      return;
    }
    // Обновляю активную букву
    const lettersArray = document.querySelectorAll('.filter__tablet-letter-button');
    lettersArray.forEach((item) => {
      item.classList.remove('js-letter-active');
    });
    selectedLetter.classList.add('js-letter-active');
    // Создаю новый фрагмент списка стран
    const newFragment = createTabletListOfCountries(sortedCountries[selectedLetter.dataset.letterIndex][1]);
    // Обновляю список стран
    const selectedLetterContent = document.querySelector('.filter__selected-letter-content');
    selectedLetterContent.innerHTML = '';
    selectedLetterContent.appendChild(newFragment);
  });
};

export {initTabletAlphabetLetters};
