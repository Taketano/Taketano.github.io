const greeting = document.querySelector('.greeting');

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
      return 'Доброе утро,';
  } else if (hours >= 12 && hours < 18) {
      return 'Добрый день,';
  } else if (hours >= 0 && hours < 6) {
      return 'Доброй ночи,';
  } else {
      return 'Добрый вечер,';
  }
}

function showGreeting() {
  
  const timeOfDay = getTimeOfDay();
  const greetingText = `${timeOfDay}`;
  greeting.textContent = greetingText;
}
showGreeting();

function setLocalStorage() {
  const name = document.querySelector('.name');
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  const name = document.querySelector('.name');
  if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);