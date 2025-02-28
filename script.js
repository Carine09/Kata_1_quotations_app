const form = document.querySelector("#send-form");
let quoteCount = 0;

let citation = { 
    author: "Simone de Beauvoir", 
    text: "On ne naît pas femme, on le devient."
}


function addQuote(quote,author) {
    // const quoteContainer = document.querySelector(".quote");
    const quoteList = document.querySelector("#quote-list")

    const newQuote = document.createElement("p");
    newQuote.classList.add("text");
    newQuote.innerText = quote;
    quoteList.appendChild(newQuote);

    const newAuthor = document.createElement("p");
    newAuthor.classList.add("author");
    newAuthor.innerText = author;
    quoteList.appendChild(newAuthor);

    quoteCount++;

    const countH3 = document.querySelector("#count")
    countH3.innerText = `Nombre de citations: ${quoteCount}`;

    localStorage.setItem("count", quoteCount);
    localStorage.setItem("citation", JSON.stringify(citation));
}

function checkLocalStorage() {
    if (localStorage.getItem(count) && localStorage.getItem(citation)) {
        quoteCount = localStorage.getItem(count);
        citation = localStorage.getItem(citation)
    }
}


checkLocalStorage();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = document.querySelector("#quotation").value;
    const author = document.querySelector("#writer").value;
    addQuote(text, author);
})
