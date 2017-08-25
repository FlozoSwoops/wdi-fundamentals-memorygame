var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay[0] === cardsInPlay[2]) {
 alert ("You found a match ");
} else { alert ("Sorry, try again")}

console.log("user flipped " + cardsInPlay[0]);
console.log("user flipped " + cardsInPlay[1]);