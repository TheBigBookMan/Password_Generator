// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

//Variable for length of password chosen by user
let lengthPrompt;

//Variable for number of criteria chosen
let numCriteria = 0

//Variables containing characters in string
let charsLowString = "abcdefghijklmnopqrstuvwxyz";
let charsUpString = charsLowString.toUpperCase();
let charsSpecString = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
let charsNumString = "0123456789"

//Variables containing characters in arrays
let charsLow = charsLowString.split("");
let charsUp = charsUpString.split("");
let charsSpec = charsSpecString.split("");
let charsNum = charsNumString.split("");

//Empty array that will be filled with the chosen character arrays
let randomCharsArrayChoice = []

/*Function that adds the chosen arrays to the empty array randomCharsArrayChoice*/
const arrayChooser = function(confirmedArray) {
  randomCharsArrayChoice.push(confirmedArray);
  return randomCharsArrayChoice;
};

arrayChooser(charsUp);
arrayChooser(charsSpec);
arrayChooser(charsNum);
arrayChooser(charsLow);
console.log(randomCharsArrayChoice)

//Variable for the randomArrayNum to be selected
let randomArrayNum;
//Function that randomises the chosen arrays to produce the random characters
const arrayRandomiser = function(arrayChoices) {
  var randomNum = Math.floor(Math.random() * arrayChoices.length);
  randomArrayNum = arrayChoices[randomNum];
  return randomArrayNum;
}

console.log(arrayRandomiser(randomCharsArrayChoice));

//Variable for the randomCharacter to be selected
let randomCharacter;
/*Function that inputs a character array and then returns a random character*/
const charRandomiser = function(arrayChar) {
  var randomNum = Math.floor(Math.random() * arrayChar.length);
  randomCharacter = arrayChar[randomNum];
  return randomCharacter;
}

console.log(charRandomiser(randomArrayNum));


//function to generate the password//
function generatePassword() {
  //asking user if they want to begin and with criteria//
  let confirm = window.confirm("The password will contain a series of numbers that you get to select as well as the length, are you ready to begin?");

  //If user confirms to continue, firstPrompt is initialized
  if (confirm) {
    firstPrompt(confirm);
  } 

  //If user denies to continue then they are told goodbye and program ended
  else {
    window.alert("Cheerio.")
    return;
  };

  secondPrompt();
  charChosen(confirmLow);

};

//if the user wants to begin or not creating the password criteria with function//
//if they confirm they want to begin then first prompt asking about length of characters//
var firstPrompt = function() {

//Prompt window asking for how many characters between 8 and 128
  lengthPrompt = window.prompt("Let's begin with the length, how many characters do you want between 8 and 128 characters?");

//This checks if the user types in anything or presses cancel to leave
  if (lengthPrompt) {

//If the user did input numbers then the if/else statement checks the numbers
//If the user inputs number less than 8 or more than 128 then an alert to try again appears and then directed to input again
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      window.alert("That wasn't between 8 and 128 characters, please try again.")
      firstPrompt()
    } 

//If the user inputs a number between 8 and 128 then that number is returned in lengthPrompt
    else {
      return lengthPrompt;
    };

//If the user decided to cancel at the length prompt then they are alerted with a goodbye message and the project stops functioning
  } else {
    window.alert("Cheerio.")
    return;
  }; 
}

  
//secondPrompt for types of characters//
//JUST INPUT THE CONFIRM PROMPTS FOR DIFFERENT SYMBOLS//
var secondPrompt = function() {
  confirmLow = window.confirm("Would you like to add lowercase characters?");
  if (confirmLow) {
    numCriteria ++
    return confirmLow;
  }

};


/*Function that uses the characters that were chosen*/
var charChosen = function(confirmChar) {
  if (confirmChar) {
    
  } else {

  }
}

/*HAVE EMPTY ARRAY AND CHARACTERS CHOSEN TO GO IN THE CHOSEN ARRAY GOES IN THE EMPTY ARRAY AND THEN THAT NEW ARRAY OF CHOSEN CHARACTERS GOES IN THE RANDOMISE FUNCTION*/

/*MAKE A FUNCTION THAT IS BOOLEAN FOR IF THEY WANT SPECIFIC SYMBOLS AND THEN IF TRUE THEN RETURN A FUNCTION THAT GOES THROUGH THAT SPECIFIC SYMBOL ARRAY AND FINDS RANDOM SYMBOLS, IF ELSE THEN RETURN 0*/

/*ALSO NEED TO ADD IN A FUNCTION THAT WILL RANDOMISE THROUGH EACH DIFFERENT TYPE OF SYMBOL FOR SPECIFIC AMOUNT OF CHARACTERS, COULD DO AN ARRAY OF THE DIFFERENT FUNCTIONS AND THEN USE A RANDOMISER FOR THAT*/
 
/*ALSO ATLEAST ONE SYMBOL HAS TO BE SELECTED SO PUT IN A COUNTER FOR EACH SELECTION MADE AND IF LESS THAN 1 THEN THEY HAVE TO RE-DO*/

/*ALSO NEED TO MAKE SURE THAT EACH SYMBOL THAT IS SELECTED NEEDS TO SHOW UP ATLEAST ONCE, SO COULD DO SOMETHING OUT OF THE RANDOMISER FUNCTION THAT INPUTS WHAT WAS SELECTED BUT RANDOMISED IN THAT SYMBOL ARRAY*/



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
