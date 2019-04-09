const handleKeyPress = (e) => {
  const key = e.key;
  playRadioAndScaleBtn(key);
};

const handleTransformed = (e) => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
};

const handleBtnClicked = (e) => {
  const key = e.currentTarget.dataset.key;
  playRadioAndScaleBtn(key)
};

const playRadioAndScaleBtn = (key) => {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const div = document.querySelector(`div[data-key="${key}"]`);

  if (!audio || !div) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  div.classList.add('playing');
};


document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('transitionend', handleTransformed);
  key.addEventListener('click', handleBtnClicked);
});
window.addEventListener('keydown', handleKeyPress);
