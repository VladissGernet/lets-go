const initAboutParallax = () => {
  if (!document.querySelector('.about')) {
    return;
  }

  const wrapper = document.querySelector('.about');
  const layer = wrapper.querySelector('.about__background');
  const MATH_VALUE_TO_FIND_CENTER = 0.5;
  const DISPLACEMENT_COEFFICIENT = 0.4;


  const handleParallax = (evt) => {
    //  верхний левый угол обертки для начала точки координат (0, 0)
    const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
    const parallaxTopOffset = wrapper.getBoundingClientRect().top;

    // Центр обертки
    const wrapperCenterX = MATH_VALUE_TO_FIND_CENTER * wrapper.offsetWidth;
    const wrapperCenterY = MATH_VALUE_TO_FIND_CENTER * wrapper.offsetHeight;

    // координаты центра обертки
    const coordX = evt.clientX - parallaxLeftOffset - wrapperCenterX;
    const coordY = evt.clientY - parallaxTopOffset - wrapperCenterY;

    const layerSpeed = layer.dataset.speed;
    const x = (-(coordX * layerSpeed) * DISPLACEMENT_COEFFICIENT).toFixed(2);
    const y = (-(coordY * layerSpeed) * DISPLACEMENT_COEFFICIENT).toFixed(2);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`);
  };

  const reset = () => {
    layer.removeAttribute('style');
  };

  wrapper.addEventListener('mousemove', handleParallax);
  wrapper.addEventListener('mouseout', reset);
};

export {initAboutParallax};
