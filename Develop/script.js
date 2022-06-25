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

//Counter for criteria requested
let requestCriteriaNum = 0

//Variable that confirms lower case characters were accepted or not
let confirmLow;

//Variable that confirms upper case characters were accepted or not
let confirmUp;

//Variable that confirms special characters were accepted or not
let confirmSpec;

//Variable that confirms number characters were accepted or not
let confirmNum;

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

//Variable for the randomArrayNum to be selected
let randomArrayNum;

//Variable for the randomCharacter to be selected
let randomCharacter;

//Variable for the selected randomized character array
let randomisedCharsArray = []

/*Function that adds the chosen arrays to the empty array randomCharsArrayChoice*/
const arrayChooser = function(confirmedArray) {
  randomCharsArrayChoice.push(confirmedArray);
  arrayRandomiser(randomCharsArrayChoice);
};

// //Function that randomises the chosen arrays to produce the random characters
const arrayRandomiser = function(arrayChoices) {
  var randomNum = Math.floor(Math.random() * arrayChoices.length);
  randomArrayNum = arrayChoices[randomNum];
  charRandomiser(randomArrayNum);
}

// /*Function that inputs a character array and then returns a random character*/
const charRandomiser = function(arrayChar) {
  var randomNum = Math.floor(Math.random() * arrayChar.length);
  randomCharacter = arrayChar[randomNum];
  // console.log(randomCharacter);/*DONT FORGET TO DELETE THIS line AFTER ITS JUST FOR PRACTICE!*/
  passwordArray(randomCharacter);//call new function in here to add random character to as a parameter
}

//Function will take in the randomized character and then add it to an array
const passwordArray = function(characterInsert) {
  randomisedCharsArray.push(characterInsert);
};

/*GET THE CHARTANDOMISER FUNCTION TO THEN ADD THE RANDOMCHARACTER TO A NEW FUNCTION BELOW THAT TAKES IN THE CHARACTERS AND PUSHES THEM TO A NEW ARRAY AND THEN JOIN THE ARRAY TO MAKE THE PASSWORD*/
/*MIGHT NEED TO ADD INTO THIS FUNCTION THE LENGTH VARIABLE AS TO KEEP IT A SPECIFIC LENGTH OR CREATE A SMALLER FUNCTION TO DO THAT AND ADD IT IN*/



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

  if (requestCriteriaNum === 1) {
    secondPrompt()
  };

  if (requestCriteriaNum === 2) {
    thirdPrompt()
  };

  if (requestCriteriaNum === 3) {
    fourthPrompt()
  };

  if (requestCriteriaNum === 4) {
    fifthPrompt()
  };

  selectionAmount()

  // console.log(numCriteria);
  // console.log("request" + requestCriteriaNum);

  /*ADD in the requestcriteraianum and add 1 everytime and then add in the prompt*/

  
  console.log(randomCharsArrayChoice)
  // console.log(arrayRandomiser(randomCharsArrayChoice));
  console.log(randomArrayNum);
  // charRandomiser(randomArrayNum);

  /*THIS IS TO TEST IF THE SELETIONS ARE GOING THROUGH WIILL NEED TO LINK RANDOM CHARACTER TO A FUNCTION THAT STORES IN THEM IN A ARRAY THOUGH*/
  console.log(randomCharacter);
  console.log(randomisedCharsArray);
  

  
  // arrayChooser(charsUp);
  // charChosen(confirmLow);
  // arrayRandomiser(randomCharsArrayChoice);
  // charRandomiser(randomArrayNum);

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
      requestCriteriaNum ++
      return lengthPrompt;
    };

//If the user decided to cancel at the length prompt then they are alerted with a goodbye message and the project stops functioning
  } else {
    window.alert("Cheerio.")
    return;
  }; 
 
}

//secondPrompt for confirming lowercase characters
var secondPrompt = function() {
  confirmLow = window.confirm("Would you like to add lowercase characters?");
  requestCriteriaNum ++;
  if (confirmLow) {
    numCriteria ++
    arrayChooser(charsLow);
  }};

//thirdPrompt for confirming uppercase characters
var thirdPrompt = function() {
  confirmUp = window.confirm("Would you like to add uppercase characters?");
  requestCriteriaNum ++;
  if (confirmUp) {
    numCriteria ++
    arrayChooser(charsUp);
  }};

//fourthPrompt for confirming special characters
var fourthPrompt = function() {
  confirmSpec = window.confirm("Would you like to add special characters?");
  requestCriteriaNum ++;
  if (confirmSpec) {
    numCriteria ++
    arrayChooser(charsSpec);
  }};

//fifthPrompt for confirming number characters
var fifthPrompt = function() {
  confirmNum = window.confirm("Would you like to add number characters?");
  requestCriteriaNum ++;
  if (confirmNum) {
    numCriteria ++
    arrayChooser(charsNum);
  }};  

//prompt alerting if there weren't more than one selection
var selectionAmount = function() {
  if (numCriteria < 1) {
    window.alert("You need to select atleast one criteria. Please try again.")
    return;
  };
};


/*HAVE EMPTY ARRAY AND CHARACTERS CHOSEN TO GO IN THE CHOSEN ARRAY GOES IN THE EMPTY ARRAY AND THEN THAT NEW ARRAY OF CHOSEN CHARACTERS GOES IN THE RANDOMISE FUNCTION*/

/*MAKE A FUNCTION THAT IS BOOLEAN FOR IF THEY WANT SPECIFIC SYMBOLS AND THEN IF TRUE THEN RETURN A FUNCTION THAT GOES THROUGH THAT SPECIFIC SYMBOL ARRAY AND FINDS RANDOM SYMBOLS, IF ELSE THEN RETURN 0*/

/*ALSO NEED TO ADD IN A FUNCTION THAT WILL RANDOMISE THROUGH EACH DIFFERENT TYPE OF SYMBOL FOR SPECIFIC AMOUNT OF CHARACTERS, COULD DO AN ARRAY OF THE DIFFERENT FUNCTIONS AND THEN USE A RANDOMISER FOR THAT*/
 
/*ALSO ATLEAST ONE SYMBOL HAS TO BE SELECTED SO PUT IN A COUNTER FOR EACH SELECTION MADE AND IF LESS THAN 1 THEN THEY HAVE TO RE-DO*/

/*ALSO NEED TO MAKE SURE THAT EACH SYMBOL THAT IS SELECTED NEEDS TO SHOW UP ATLEAST ONCE, SO COULD DO SOMETHING OUT OF THE RANDOMISER FUNCTION THAT INPUTS WHAT WAS SELECTED BUT RANDOMISED IN THAT SYMBOL ARRAY*/



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
