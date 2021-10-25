const city = document.querySelector('.input-city');
city.addEventListener("change", getWeather);
import {lang} from './translate.js';

export async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=d0f5a42e56db044adb02911bc0e4731c&units=metric`;
   const res = await fetch(url);
   const data = await res.json(); 

   const weatherIcon = document.querySelector('.weather-icon');
   const temperature = document.querySelector('.temperature');
   const speed = document.querySelector('.speed');
   const humidity = document.querySelector('.humidity');
   const weatherDescription = document.querySelector('.weather-description');

   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp} °C`;
   let type = 'm/s';
   if(lang == 'ru')
    type = 'м/с'
   speed.textContent = `${data.wind.speed} ${type}`;
   humidity.textContent = `${data.main.humidity} %`;
   weatherDescription.textContent = data.weather[0].description;
}

function setLocalStorage(){
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(){
  if(localStorage.getItem('city'))
  city.value = localStorage.getItem('city');
}
window.addEventListener('load', getLocalStorage);