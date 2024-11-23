import noUiSlider from './../vendor/nouislider.min';

const initFilterSlider = () => {
  const slider = document.getElementById('slider');

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
    // console.log(slider.noUiSlider.get());
  });

  // Получает значение от input и обновляет ползунок

  slider.noUiSlider.set([13, 40]);
};

export {initFilterSlider};
