let isPlay = false;
let playNum = 0;
const audio = document.querySelector('.audio');
const buttonPrev = document.querySelector('.play-prev');
const buttonPlay = document.querySelector('.audio-play');
const buttonNext = document.querySelector('.play-next');
const audioName = document.querySelector('.audioName');
const timeEnd = document.querySelector('.timeEnd');
audio.addEventListener("ended", playNext);
import playList from "./playlist.js";

const playListContainer = document.querySelector('.play-list');
let i = 0;
playList.forEach(el => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('audio-play');
    button.id = `numAudio${i}`;
    button.value = i++;
    li.classList.add('play-item');
    button.addEventListener("click", function() {numOfAudio(button.value)});    
    li.appendChild(button);
    li.appendChild(document.createTextNode(el.title));
    playListContainer.append(li);
})

let buttonN = document.getElementById(`numAudio${playNum}`);
console.log(buttonN);

function numOfAudio(x){
    if(playNum == x)
    {
        if(isPlay == true)
        {
            audio.pause();
            buttonPlay.classList.remove('pause');
            buttonN.classList.remove('pause');
            isPlay = false;
            return;
        }
        else 
        {
            audio.play();
            buttonPlay.classList.add('pause');
            buttonN.classList.add('pause');
            isPlay = true;
            audioName.textContent = playList[playNum].title;
            timeEnd.textContent = playList[playNum].duration;
            return;
        }
    }
    playNum = x;
    if(buttonPlay.classList.contains('pause'))
        buttonPlay.classList.remove('pause');
    buttonN.classList.remove('pause');
    buttonN = document.getElementById(`numAudio${x}`);
    buttonN.classList.add('pause');
    buttonPlay.classList.add('pause');
    audio.src = playList[x].src;
    audioName.textContent = playList[x].title;
    timeEnd.textContent = playList[x].duration;
    audio.play();
    isPlay = true;
}

function playAudio() {
    if(!isPlay){
        if(buttonN.classList.contains('pause'));
            buttonN.classList.remove('pause');
        if(buttonN.id !=`numAudio${playNum}`)
        {
            audio.src = playList[playNum].src;
        }
            audioName.textContent = playList[playNum].title;
            timeEnd.textContent = playList[playNum].duration;
        buttonN = document.getElementById(`numAudio${playNum}`);
        audio.play();
        isPlay = true;
        buttonN.classList.add('pause');
    }
    else{
        audio.pause();
        isPlay = false;
        if(buttonN.classList.contains('pause'));
            buttonN.classList.remove('pause');
    }
}

function playAudioNow(){
    if(isPlay)
    {
    buttonN = document.getElementById(`numAudio${playNum}`);
    audio.currentTime = 0;
    audio.src = playList[playNum].src;
    audioName.textContent = playList[playNum].title;
    timeEnd.textContent = playList[playNum].duration;
    audio.play();
    buttonN.classList.add('pause');
    }  
else
    {
        audio.currentTime = 0;
        audio.src = playList[playNum].src;
        audioName.textContent = playList[playNum].title;
        timeEnd.textContent = playList[playNum].duration;
        if(buttonN.classList.contains('pause'));
            buttonN.classList.remove('pause');
    } 
}

function playNext(){
if(buttonN.classList.contains('pause'));
    buttonN.classList.remove('pause');
++playNum;
if(playNum == 3)
    playNum = 0;
playAudioNow();
}

function playPrev(){
if(buttonN.classList.contains('pause'));
    buttonN.classList.remove('pause');
--playNum;
if(playNum == -1)
    playNum = 2;
playAudioNow(); 
}

function toggleBtn(){
    buttonPlay.classList.toggle("pause");
}

buttonPrev.addEventListener("click", playPrev);
buttonPlay.addEventListener("click", playAudio);
buttonNext.addEventListener("click", playNext);
buttonPlay.addEventListener("click", toggleBtn);

const SVInput = document.querySelector(".soundVolume");
const SVButton = document.querySelector(".isSound");

function soundVolume(){
    if(SVInput.value == 0)
        SVButton.classList.add("isntSound"); 
    else
        SVButton.classList.remove("isntSound"); 
    audio.volume = SVInput.value/100;
}
SVInput.addEventListener("input",soundVolume);

function butImage(){
    SVButton.classList.toggle("isntSound");
    if(SVInput.value != 0) 
        SVInput.value = 0;
    else
        SVInput.value = 100;
    audio.volume = SVInput.value/100;
}
SVButton.addEventListener("click", butImage);

const timeNow = document.querySelector('.timeNow');
const timerPlayer= document.querySelector('.timer-player');
function timeUpdate(){
    timeNow.textContent = Math.floor(audio.currentTime);
    let x = (audio.currentTime / audio.duration) * 100;
    timerPlayer.style.width = `${x}%`;
}
audio.addEventListener("timeupdate", timeUpdate);
const divPlayer= document.querySelector('.duration-player');
let isClick = false;

divPlayer.addEventListener("mousedown", function(event)
{  
    let x = ((event.clientX - 7) / divPlayer.offsetWidth) * 100;
    timerPlayer.style.width = `${x}%`;
    isClick = true;
    audio.pause();
})

divPlayer.addEventListener("mousemove", function (event)
{
if(isClick)
    {
    let x = ((event.clientX - 7) / divPlayer.offsetWidth) * 100;
    timerPlayer.style.width = `${x}%`;
    }
})

divPlayer.addEventListener("mouseup", function(event)
{  
    isClick = false;
    audio.currentTime = ((event.clientX - 7) / divPlayer.offsetWidth) * audio.duration;
    audio.play();
})
