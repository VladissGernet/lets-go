const createTabletAlphabet = (tabletContent, sortedCountries) => {
  const alphabetList = tabletContent.querySelector('.filter__tablet-alphabet');
  const selectedLetterContentList = tabletContent.querySelector('.filter__selected-letter-content');
  console.log(alphabetList);
  console.log(selectedLetterContentList);
  alphabetList.style.height = "100px";
  alphabetList.style.background = "tomato";


};

export {createTabletAlphabet};
