import {lang} from './translate.js';

export async function getQuotes() {  
    const quotes = `data${lang}.json`;
    const res = await fetch(quotes);
    const data = await res.json(); 
    const author = document.querySelector('.author');
    const text = document.querySelector('.quote');
    let i = Math.floor( Math.random() * 3 );
    author.textContent = data[i].author;
    text.textContent = data[i].text;
}
const bQuote = document.querySelector('.bQuote');
bQuote.addEventListener("click", getQuotes);