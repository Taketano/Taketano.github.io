import playList from "./playList.js";

let tracksElements = playList.map(track => {
  let newTrack = document.createElement('li');
  newTrack.classList.add('play-item');
  newTrack.textContent = track.title;
  return newTrack;
})

const player = document.querySelector('.player');
const prev = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const next = document.querySelector('.play-next');
const list = document.querySelector('.play-list');
const volumeRange = document.querySelector('.volumeRange');
const volumeMute = document.querySelector('.volumeMute');

const audio = new Audio();
let current = 0;
audio.src = playList[current].src;
player.prepend(audio);

let isPlay = false;

const playAudio = () => {
  if (isPlay) {
    play.classList.remove('pause');
    audio.pause();
    isPlay = false;
  } else {
    play.classList.add('pause');
    audio.play();
    isPlay = true;
  }
}

const changeTrack = (e) => {
  if (!isPlay) {
    play.classList.add('pause');
    isPlay = true;
  }
  if (e.target === prev) {
    tracksElements[current].classList.remove('item-active');
    if (current === 0) {
      current = playList.length - 1;
    } else {
      current--;
    }
  } else {
    tracksElements[current].classList.remove('item-active');
    if (current === playList.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }
  audio.src = playList[current].src;
  tracksElements[current].classList.add('item-active');
  audio.currentTime = 0;
  audio.play();
}

play.addEventListener('click', playAudio);
prev.addEventListener('click', changeTrack);
next.addEventListener('click', changeTrack);
audio.addEventListener('ended', changeTrack);

const createPlaylist = () => {
  tracksElements.forEach(trackElement => {
    list.append(trackElement);
  });
  tracksElements[0].classList.add('item-active');
}

createPlaylist();



volumeRange.addEventListener('input', () => {
  let value = volumeRange.value;
  audio.volume = value / 100;
  let percent = value;
  volumeRange.style.background = `linear-gradient(to right, #d3d3d3 0%, #d3d3d3 ${percent}%, transparent ${percent}%, transparent 100%)`;
})