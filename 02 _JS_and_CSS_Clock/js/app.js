const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setClock = () => {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const second = now.getSeconds();

  const secondDeg = (second / 60) * 360;
  const minDeg = (min / 60) * 360 + (second / 60) * (360 / 60);
  const hourDeg = (hour / 12) * 360 + ((min + second / 60) / 60) * (360 / 12);

  hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;
  minHand.style.transform = `rotate(${minDeg + 90}deg)`;
  secondHand.style.transform = `rotate(${secondDeg + 90}deg)`;
};

setClock();
setInterval(setClock, 1000);
