import noUiSlider from '../../vendor/nouislider.min';

// const InputsIdentifiers = {
//   'user-level-from': 0,
//   'user-level-to': 1,
// };

const initFilterSlider = () => {
  const slider = document.getElementById('slider');
  if (!slider) {
    return;
  }

  const inputsWrapper = document.querySelector('.cards-filter__slider-inputs');
  const inputs = inputsWrapper.querySelectorAll('input');

  noUiSlider.create(slider, {
    start: [30, 100],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100,
    },
  });

  // Обновляет значение в слайдере и подставляет новые
  // значения в inputs.
  slider.noUiSlider.on('update', () => {
    inputs[0].value = Number(slider.noUiSlider.get()[0]).toFixed(0);
    inputs[1].value = Number(slider.noUiSlider.get()[1]).toFixed(0);
  });

  // Получает значение от input и обновляет ползунок
  inputsWrapper.addEventListener('change', (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }
    slider.noUiSlider.set([inputs[0].value, inputs[1].value]);

  });
};

export {initFilterSlider};
