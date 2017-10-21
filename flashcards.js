var inquirer = require("inquirer");

//this function will create a flashcard
var testDeck = [];

var newCard = function(question, answer){
	this.question = question,
	this.answer = answer
};

var setUpCard = function(){
	inquirer.prompt([{

		type: 'input',
		name: 'question',
		message: 'Please enter your Question(Side A)',

	},
	{
		type: 'input',
		name: 'answer',
		message: 'Please enter your Answer(Side B)',
	
	}]).then(function(card){
		var card = new newCard(
			card.question,
			card.answer,
			)

		card.push(testDeck);

	});
};

var readDeck = function(){
	console.log(testDeck);
};

setUpCard();
readDeck();