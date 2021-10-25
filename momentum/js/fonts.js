let selectX = document.querySelector(".sourceFont");
function changeFont(){
if(selectX.selectedIndex == 0)
    {
        getSlideNext();
        console.log(0);
    }
else if(selectX.selectedIndex == 1)
    {
        getLinkToImage();
        console.log(1);
    }
else if(selectX.selectedIndex == 2)
    {
        getLinkToImageF();
        console.log(2);
    }
}
selectX.addEventListener("change", changeFont);
import { getSlideNext } from "./Slider.js";
import { getLinkToImage } from "./Unsplash.js";
import { getLinkToImageF } from "./Flickr.js";