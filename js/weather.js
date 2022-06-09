async function getWeather() {
  const city = document.querySelector('.city');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=f57bd541dd9c5eb946334759e6997dc8&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const errorCity = document.querySelector('.weather-error');

  if (!data.name) {
      errorCity.textContent = `Город не найден!`;
      city.placeholder = '[Введите город]';
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
      weatherIcon.className = 'weather-icon';

  } else {
      errorCity.textContent = '';
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${Math.trunc(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity}%`;
  }
}
getWeather()

const city = document.querySelector('.city');
city.addEventListener('change', getWeather)

function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
  }
  getWeather();
}
window.addEventListener('load', getLocalStorage)