function getRandomNum() {
  let min = Math.ceil(1);
  let max = Math.floor(20);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum()

let randomNum = getRandomNum();

function setBg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = randomNum.toString().padStart(2, '0');
  const body = document.querySelector('body');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
  img.onload = () => {
      body.style.backgroundImage = "url('"+img.src+"')";
  };
}
setBg()

function getSlideNext() {
  randomNum++;

  if (randomNum === 21) {
      randomNum = 1;
  }
  setBg();
}
getSlideNext()

let slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext)


function getSlidePrev() {
  randomNum--;

  if (randomNum === 0) {
      randomNum = 20;
  }
  setBg();
}
getSlidePrev()

let slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev)
