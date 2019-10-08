var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

if (cardsInPlay.length === 2) {
	//alert('good to go');
} else if (cardOne === cardTwo) {
	alert('O YEAH YOU DID IT');
} else (cardOne !== cardTwo) {
	alert('Sorry Sucker - Try Again!')
}
