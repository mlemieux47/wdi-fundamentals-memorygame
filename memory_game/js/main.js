var cards = [
{	
	rank: "queen",
	suit: "hearts",
	CardImage: "images/queen-of-hearts.png"
},
{	
	rank: "queen",
	suit: "diamonds",
	CardImage: "images/queen-of-diamonds.png"
},
{	
	rank: "king",
	suit: "hearts",
	CardImage: "images/king-of-hearts.png"
},
{	
	rank: "king",
	suit: "diamonds",
	CardImage: "images/king-of-diamonds.png"
}
];

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
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
//if(cardsInPlay.length ===2){
	checkForMatch();
//}else{
	//flipCard();
//}
console.log(cards[cardId].CardImage);
console.log(cards[cardId].suit);
};

flipCard(1)
flipCard(2)
