import {lang} from './translate.js';
function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

function showDate() {
    const time = document.querySelector('.date');
    const date = new Date();
    const options = {day:'numeric', month: 'long', year: 'numeric'}
    let currentTime = date.toLocaleDateString(lang, options);
    time.textContent = currentTime;
}

function showGreeting() {
    const greet = document.querySelector('.greeting');
    let nameOfDay = getTimeOfDay();
    let greetingText = 'ZZZZZZ';
    if(lang == 'en')
        greetingText = `Good ${nameOfDay}`;
    else
        greetingText = nameOfDay;
    greet.textContent = greetingText;
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours(date);
    let nameOfDay ="";
    if(lang == 'en')
    {
        switch(Math.trunc(hours/6))
        {
            case 0: nameOfDay = "morning"; break;
            case 1: nameOfDay = "afternoon"; break;
            case 2: nameOfDay = "evening"; break;
            case 3: nameOfDay = "night"; break;
            default: nameOfDay = "ZZZ"; break;
        }
    }
    else{
        switch(Math.trunc(hours/6))
        {
            case 0: nameOfDay = "Доброе утро"; break;
            case 1: nameOfDay = "Добрый день"; break;
            case 2: nameOfDay = "Добрый вечер"; break;
            case 3: nameOfDay = "Доброй ночи"; break;
            default: nameOfDay = "ZZZ"; break;
        }
    }
    return nameOfDay;
}
showTime(0);