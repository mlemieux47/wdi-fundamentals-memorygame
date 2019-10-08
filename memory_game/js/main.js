var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

var cardsInPlay = [];


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
//if(cardsInPlay.length ===2){
	checkForMatch();
//}else{
	//flipCard();
//}
};


flipCard(0)
flipCard(1)