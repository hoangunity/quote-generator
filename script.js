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
let apiQuotes = [];

// Show New Quote
function newQuote(min = 0, max = apiQuotes.length) {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.trunc(min + Math.random() * (max - min))];
  console.log(quote);
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
  }
}

// On Load
getQuotes();
// newQuote();
