const select = document.querySelector('.language');
export let lang ='en';
function changeLang(){
    console.log(select.selectedIndex);
    if(select.selectedIndex == 0)
    {
        lang ='en';
        getWeather();
        getQuotes();
    }
    else 
    {
        lang ='ru';
        getWeather();
        getQuotes();
    }
}

function firstShow(){
    getWeather();
    getQuotes();
}
firstShow();

select.addEventListener("change", changeLang);
import { getWeather } from "./weather.js";
import { getQuotes } from "./quote.js";


