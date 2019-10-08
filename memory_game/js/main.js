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
};

function flipCard(){
	this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

if(cardsInPlay.length === 2){
	checkForMatch();
}else{
	flipCard();
}
};

function createBoard(){
	for (var i = 0; i < cards.length; i += 1){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);

	cardElement.addEventListener('click',flipCard)
	document.getElementById('game-board').appendChild(cardElement);	
	}
};

createBoard();
