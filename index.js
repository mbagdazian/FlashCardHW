var inquirer = require("inquirer");
var methods = require("./flashcards.js");

var startPrompt = function () {
	inquirer.prompt([
		{
			type: "list",
			name: "userType",
			message: "What would you like to do?",
			choices: ['Create-a-New-Deck', 'Create-a-Card', 'View-Decks', 'Study-Cards', 'Quit']
		}]

	).then(function (choice) {

		if (choice.userType === 'Create-a-New-Deck') {
			newCard(); //should be new deck
			//okay for testing
			console.log("You Chose 'Create a New Deck'");
		} else if (choice.userType === 'Create-a-Card') {
			methods.setUpCard();
			console.log("You Chose 'Create a Card'");
		} else if (choice.userType === 'View-Decks') {
			methods.readDeck();
			console.log("You Chose 'view decks'");
		} else if (choice.userType === 'Study-Cards') {
			methods.studyCards();
			console.log("You Chose Study Cards");
		} else if (choice.userType === 'Quit') {
			console.log("Keep Studying! Good Luck!");
		}
	});

};





startPrompt();