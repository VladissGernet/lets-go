const initCardsFilter = () => {
  const cardsFilter = document.querySelector('.cards-filter');
  if (!cardsFilter) {
    return;
  }

  const form = cardsFilter.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

};

export {initCardsFilter};
