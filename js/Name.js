function setLocalStorage(){
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(){
    const name = document.querySelector('.name');
    if(localStorage.getItem('name'))
    name.value = localStorage.getItem('name');
}
window.addEventListener('load', getLocalStorage);
