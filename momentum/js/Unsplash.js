export async function getLinkToImage() {
    const body = document.querySelector('.body');
    const tags = document.querySelector('.tags');
    let tag = getTimeOfDay();
    if(tags.value != "")
        tag = tags.value;
    const url = `https://api.unsplash.com/photos/random?query=${tag}&client_id=Y4XtrrMrCMfmgKDKwUqFd3xezbX6Xs2BLM5Rq-2bEj4`;
    const res = await fetch(url);
    const data = await res.json(); 
    const img = new Image();
    img.src = data.urls.regular;
    img.addEventListener('load', function() {
        body.style.backgroundImage = `url(${img.src})`});
    let slideNext = document.querySelector('.slideNext');
        slideNext.addEventListener("click", getLinkToImage);
        slideNext.removeEventListener("click", getSlideNext);
        slideNext.removeEventListener("click", getLinkToImageF);
    let slidePrev = document.querySelector('.slidePrev');
        slidePrev.addEventListener("click", getLinkToImage);   
        slidePrev.removeEventListener("click", getSlidePrev);
        slidePrev.removeEventListener("click", getLinkToImageF);  
}

import { getTimeOfDay } from "./Slider.js";
import { getSlideNext } from "./Slider.js";
import { getSlidePrev } from "./Slider.js";
import { getLinkToImageF } from "./Flickr.js";