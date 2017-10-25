var inquirer = require("inquirer");
var fs = require("fs");
var NewCard = require("./newCard");
//this function will create a flashcard

var methods = {
	//investigate binding this
	testDeck: [],

	setUpCard: function () {
		inquirer.prompt([{

			type: 'input',
			name: 'question',
			message: 'Please enter your Question(Side A)',

		},
		{
			type: 'input',
			name: 'answer',
			message: 'Please enter your Answer(Side B)',

			// }, 
			// {
			// 	type: 'input',
			// 	name: 'category',
			// 	message: 'Which topic does this card belong to?'
		}
		]).then(function (card) {
			card = new NewCard(
				card.question,
				card.answer
				//add topic
			)

			methods.testDeck.push(card); //context of this becomes document
			//develop some regex to read from the .txt file
			//regex101.com
			//store new card as text object in .txt file
			//set up some kind of switch statement which reads topic and pushes to particular text file
			fs.appendFile('cards.txt', "\n{\nquestion: '" + card.question + "', \nanswer: '" + card.answer + "'\n}", 'utf8');
			//add topic key

			methods.readDeck();
		});
	},

	readDeck: function () {
		console.log(this.testDeck);
		//find all .txt files and determine topics list and let user pick subject?
		//process their choice to display cards
	},

	studyCards: function () {
		//cycle through deck options
		//cards within deck are presented to the student
		//they can enter/review their answers
	}
}
module.exports = methods;