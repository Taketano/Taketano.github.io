const quoteDiv = document.querySelector('.quote');
const authorDiv = document.querySelector('.author');
document.querySelector('.change-quote').addEventListener('click', addQuote);

addQuote();

function randomInt(min, max) {
	return Math.floor( min + Math.random() * (max + 1 - min) );
}

async function addQuote() {
    let linkToQuotes = 'quotes.json';
    let response = await fetch(linkToQuotes);
    let quotes = await response.json();
    let randomNum = randomInt(0, 7);
    let quote = quotes[randomNum];
    
    quoteDiv.textContent = `"${quote.text}"`;
    authorDiv.textContent = quote.author;
}