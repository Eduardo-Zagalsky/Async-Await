let numURL = "http://numbersapi.com/7/trivia?json";
let facts = [];
let numbersSpace = document.getElementById("numbers");
let cardSpace = document.getElementById("cards");
let str = document.createElement("h1");
let img = document.createElement("img");
let newURL = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
let cardButton = document.createElement("button");
cardButton.textContent = "Card";


function getNumInfo(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            //check status code
            if (request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status
                }
                )
            } else {
                reject(request.status)
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject('NETWORK ERROR!')
        };
        request.open('GET', url);
        request.send();
    })
}
getNumInfo(numURL)
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

function cardInfo(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            //check status code
            if (request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status
                }
                )
            } else {
                reject(request.status)
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject('NETWORK ERROR!')
        };
        request.open('GET', url);
        request.send();
    })
}
cardInfo(cardURL)
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


function newDeck(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            //check status code
            if (request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status
                }
                )
            } else {
                reject(request.status)
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject('NETWORK ERROR!')
        };
        request.open('GET', url);
        request.send();
    })
}
newDeck(newURL)
    .then(res => {
        const deckId = res.data.deck_id;
        let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
        console.log(message);
        img.src = res.data.cards[0]['image'];
    })
    .catch(err => {
        console.log("Error", err);
    })

function pickACard(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            //check status code
            if (request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status
                }
                )
            } else {
                reject(request.status)
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject('NETWORK ERROR!')
        };
        request.open('GET', url);
        request.send();
    })
}
pickACard(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res => {
        let message = `${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`;
        console.log(message);
        img.src = res.data.cards[0]['image'];
    })
    .catch(err => {
        console.log("Error", err);
    })

document.addEventListener("click", pickACard);

cardSpace.append(img);
cardSpace.append(cardButton);