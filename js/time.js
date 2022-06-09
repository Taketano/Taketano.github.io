const time = document.querySelector('.time');
const datee = document.querySelector('.date');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);

  function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    datee.textContent = currentDate;
  }
  showDate();
}
showTime();