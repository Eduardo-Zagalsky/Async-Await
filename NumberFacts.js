let numURL = "http://numbersapi.com/7/trivia?json";
let facts = [];
let numbersSpace = document.getElementById("numbers");
let cardSpace = document.getElementById("cards");
let str = document.createElement("h1");
let img = document.createElement("img");
let newURL = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
let cardButton = document.createElement("button");
cardButton.textContent = "Card";


async function getNumInfo() {
    await axios.get(numURL)
        .then(res => {
            facts.push(res.data.text);
            console.log(res.data.text)
            return axios.get(numURL);
        })
        .then(res => {
            facts.push(res.data.text);
            console.log(res.data.text)
            return axios.get(numURL);
        })
        .then(res => {
            facts.push(res.data.text);
            console.log(res.data.text)
            return axios.get(numURL);
        })
        .then(res => {
            facts.push(res.data.text);
            console.log(res.data.text)
        })
        .catch(err => {
            console.log("Error", err);
        })
    for (let fact of facts) {
        str.innerText += fact + "\n";
        numbersSpace.append(str);
    };
};

async function cardInfo() {
    await axios.get(newURL)
        .then(res => {
            deckId = res.data.deck_id;
            let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
            console.log(message);
            return axios.get(cardURL);
        })
        .then(res => {
            let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
            console.log(message);
        })
        .catch(err => {
            console.log("Error", err);
        })
}


async function newDeck() {
    await axios.get(newURL)
        .then(res => {
            const deckId = res.data.deck_id;
            let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
            console.log(message);
            img.src = res.data.cards[0]['image'];
        })
        .catch(err => {
            console.log("Error", err);
        })
}

async function pickACard() {
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => {
            let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
            console.log(message);
            img.src = res.data.cards[0]['image'];
        })
        .catch(err => {
            console.log("Error", err);
        })
}

getNumInfo();
cardInfo();

document.addEventListener("click", pickACard);

cardSpace.append(img);
cardSpace.append(cardButton);


newDeck();