const form = document.querySelector("#send-form");
let quoteCount = 0;

let citation = { 
    author: "Simone de Beauvoir", 
    text: "On ne naît pas femme, on le devient."
}


function addQuote(quote,author) {
    // const quoteContainer = document.querySelector(".quote");
    const quoteList = document.querySelector(".quote-list");
    
    const newQuote = document.createElement("p");
    newQuote.classList.add("text");
    // newQuote.textContent = quote; c'est un équivalent de newQuote.innerText
    newQuote.innerText = quote;
    // quoteList.appendChild(newQuote);
    
    const newAuthor = document.createElement("p");
    newAuthor.classList.add("author");
    newAuthor.innerText = author;
    // quoteList.appendChild(newAuthor);
    
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote");
    quoteContainer.appendChild(newQuote);
    quoteContainer.appendChild(newAuthor);
    quoteList.appendChild(quoteContainer);

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
} // je n'arrive pas à faire afficher sur le html les données stockées


checkLocalStorage(); // ne fonctionne pas

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = document.querySelector("#quotation").value;
    const author = document.querySelector("#writer").value;
    addQuote(text, author);
})
