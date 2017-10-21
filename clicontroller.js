
var deck1 = require("./animalcard.js");
var deck2 = require("./capitalcard.js");

var inquirer = require("inquirer");

var fs = require("fs");

//variable for guesses
var count = 0;

function start(){

	inquirer.prompt([

		{
			type: "list",
			message: "Which deck would you like to play?",
			choices: ["Animal flashcards!", 
				"Capital flashcards!",],
			name: "choices"
		}

	]).then(function(data){

		if(data.choices === "Animal flashcards!"){
			animalquiz();
		}else if(data.choices === "Capital flashcards!"){
			capitalQuiz();
		}else {
			process.exit();
		}

	});
}


function animalQuiz(){
	if(count < deck1.arr.length){

		inquirer.prompt([

			{
				type: "input",
				message: `${deck1.arr[count].front}`,
				name: "question",
				default: ""
			}

		]).then(function(data){

			if(data.question === deck1.arr[count].back) {
				console.log("correct");
			}else {
				console.log(deck1.arr[count].back);
			}

			count++;
			animalQuiz();

		});

	}else {

		exitAnimal();
	}

}

function capitalQuiz(){
	if(count < deck2.arr.length){

		inquirer.prompt([

			{
				type: "input",
				message: `${deck2.arr[count].front}`,
				name: "question",
				default: ""
			}

		]).then(function(data){

			if(data.question === deck2.arr[count].back) {
				console.log("correct");
				rightCount++;
			}else {
				console.log(deck2.arr[count].back);
			}

			count++;
			capitalQuiz();

		});

	}else {

		exitCapital();
	}

}

function exitAnimal(){

	//need to add amount of user guesses

	inquirer.prompt([

		{
			type: "confirm",
			name: "confirm",
			message: "Play again?"
		}

	]).then(function(data){

		count = 0;

		if(data.confirm){
			Animalquiz();
		}else {
			start();
		}

	});

}

function exitCapital(){

	//need to add amount of user guesses

	inquirer.prompt([

		{
			type: "confirm",
			name: "confirm",
			message: "Play again?"
		}

	]).then(function(data){

		count = 0;

		if(data.confirm){
			CapitalQuiz();
		}else {
			start();
		}

	});

}


start();

