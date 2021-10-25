export async function getLinkToImageF() {
    const body = document.querySelector('.body');
    const tags = document.querySelector('.tags');
    let tag = getTimeOfDay();
    if(tags.value != "")
        tag = tags.value;
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b905431c49abee0e480e539468fbc48&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let x = data.photos.photo[Math.ceil(Math.random() * data.photos.perpage)].url_l;
    const img = new Image();
    img.src = x;
    img.addEventListener('load', function() {
        body.style.backgroundImage = `url(${x})`});
    let slideNext = document.querySelector('.slideNext');
        slideNext.addEventListener("click", getLinkToImageF);
        slideNext.removeEventListener("click", getLinkToImage);
        slideNext.removeEventListener("click", getSlideNext);
    let slidePrev = document.querySelector('.slidePrev');
        slidePrev.addEventListener("click", getLinkToImageF);  
        slidePrev.removeEventListener("click", getLinkToImage); 
        slidePrev.removeEventListener("click", getSlidePrev);
}

import { getTimeOfDay } from "./Slider.js";
import { getLinkToImage } from "./Unsplash.js";
import { getSlideNext } from "./Slider.js";
import { getSlidePrev } from "./Slider.js";