let randBG;

export function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours(date);
    let nameOfDay ="";
    switch(Math.trunc(hours/6))
    {
        case 0: nameOfDay = "morning"; break;
        case 1: nameOfDay = "afternoon"; break;
        case 2: nameOfDay = "evening"; break;
        case 3: nameOfDay = "night"; break;
        default: nameOfDay = "ZZZ"; break;
    }
    return nameOfDay;
}

function getRandomNum(){
    return Math.ceil(Math.random() * 10) + 10;
}

function bodyBG(){
    const body = document.querySelector('.body');
    let timeOfDay = getTimeOfDay();
    body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randBG}.jpg)`;
}
export function setBG() {
    let timeOfDay = getTimeOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randBG}.jpg`;
    img.addEventListener('load', bodyBG);

    let slideNext = document.querySelector('.slideNext');
        slideNext.addEventListener("click", getSlideNext);
        slideNext.removeEventListener("click", getLinkToImage);
        slideNext.removeEventListener("click", getLinkToImageF);
    let slidePrev = document.querySelector('.slidePrev');
        slidePrev.addEventListener("click", getSlidePrev);
        slidePrev.removeEventListener("click", getLinkToImage); 
        slidePrev.removeEventListener("click", getLinkToImageF);  
}
import { getLinkToImage } from "./Unsplash.js";
import { getLinkToImageF } from "./Flickr.js";
export function getSlideNext(){
    ++randBG;
    if(randBG == 21)
        randBG = 10;
    setBG();
}

export function getSlidePrev(){
    --randBG;
    if(randBG == 9)
        randBG = 20;
    setBG();
}
randBG = getRandomNum();
setBG();
