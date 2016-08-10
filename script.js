//When the page loads, the user should be prompted to supply a number. 
//The easiest way to do this would be with the prompt() function, but you should also feel free to 
//create a simple text input with text telling the user to input a number.

$(document).ready(function(){
	callAndParsePrompt();
	
	function callAndParsePrompt() {
		var input = prompt("Please enter a number from 1-100");
		var numberInput = parseInt(input);
		isNumber(numberInput);
	}

	function isNumber(userVal) {
		if ( isNaN(userVal)  ){
			console.log('not number');
			callAndParsePrompt();
		}
		else { 
			userInput(userVal);
		}
	}
	// if is number , call fn
	// if not number, call prompt again

	//take input and see if it's a number
	
	//console.log(numberInput);
	//console.log(typeof(numberInput));
	
//things

//You'll need to write one named function that takes an integer as argument, 
//and then counts from 1 to the argument value, substituting "fizz", "buzz", and "fizzbuzz" accordingly.

	function userInput(input){
		for (var i=1; i<=input; i++){
			if (i % 5 == 0 && i % 3 == 0){
				document.write("fizzbuzz<br/>");
			}
			else if (i % 3 == 0){
				document.write("fizz<br/>");
			}
			else if (i % 5 == 0){
				document.write("buzz<br/>");
			}
			else {
				document.write(i + "<br/>");
			}
		}
	}
});


//You'll need to convert the value the user supplies from a string to a number. 
//Remember that the value that you get from prompt() or the val() on your form will by default be a string. 
//To convert this to an integer you can use the + operator to convert a string to an integer. 
//For instance, if you had the string "22", you could convert that to a number with +"22".



//You will need to validate user input to ensure the user is submitting a number. 
//You can use the parseInt() function in JavaScript to convert a string into an integer. 
//For example, parseInt('597a') will return 597 where parseInt('hello') will return NaN. Read more about parseInt() on MDN.