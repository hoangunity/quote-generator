// Get Quote From API
// async function getQuote() {
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   const apiUrl =
//     "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json;
//     console.log(data);
//   } catch (error) {
//     getQuote();
//     console.log("No Quotes for you:", error.message);
//   }
// }

// On Load
// getQuote();

/////////////////////////////////////
/////////////////////////////////////
///// VERSION 2
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

function getRandomNumber(min, max) {
  return Math.trunc(min + Math.random() * (max - min));
}

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array;;
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if Author field is blank and replace it with "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error
    console.log(error.message);
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
// newQuote();
