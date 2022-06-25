// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Variable for length of password chosen by user
let lengthPrompt;

// Variable for number of criteria chosen
let numCriteria = 0;

// Counter for criteria requested
let requestCriteriaNum = 0;

// Variable that confirms lower case characters were accepted or not
let confirmLow;
// Variable that confirms upper case characters were accepted or not
let confirmUp;
// Variable that confirms special characters were accepted or not
let confirmSpec;
// Variable that confirms number characters were accepted or not
let confirmNum;

// Variables containing characters in strings
let charsLowString = "abcdefghijklmnopqrstuvwxyz";
let charsUpString = charsLowString.toUpperCase();
let charsSpecString = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
let charsNumString = "0123456789";

// Variables containing characters in arrays
let charsLow = charsLowString.split("");
let charsUp = charsUpString.split("");
let charsSpec = charsSpecString.split("");
let charsNum = charsNumString.split("");

// Empty array that will be filled with the chosen character arrays
let randomCharsArrayChoice = [];

// Variable for the randomArrayNum to be selected
let randomArrayNum;

// Variable for the randomCharacter to be selected
let randomCharacter;

// Variable for the selected randomized character array
let randomisedCharsArray = [];

// Variable that will be turning randomisedCharsArray into a string
let passwordString;

// Function that takes in the character array choices and then randomises the chosen arrays to be sent to the charRandomiser
const arrayRandomiser = function(arrayChoices) {
  var randomNum = Math.floor(Math.random() * arrayChoices.length);
  randomArrayNum = arrayChoices[randomNum];
  charRandomiser(randomArrayNum);
};

// Function that takes the random chosen array and then will select a random character from that array, which will then be sent to the passwordArray
const charRandomiser = function(arrayChar) {
  var randomNum = Math.floor(Math.random() * arrayChar.length);
  randomCharacter = arrayChar[randomNum];
  passwordArray(randomCharacter);
};

// Function will take in the randomized character and then push it to an array
const passwordArray = function(characterInsert) {
  randomisedCharsArray.push(characterInsert);
};

// Function to generate the password
function generatePassword() {
  // Asking user if they want to begin
  let confirm = window.confirm("This will randomly generate a password for you based on the length you choose as well as which type of characters you would like in it, are you ready to begin?");

  // If user confirms to continue, firstPrompt is initialized
  if (confirm) {
    firstPrompt(confirm);
  }
  // If user denies to continue then they are told goodbye and program ended
  else {
    window.alert("Cheerio.");
    return;
  };

  // After the user has chosen the length correctly, they are then presented with the second prompt
  if (requestCriteriaNum === 1) {
    secondPrompt();
  };

  // After the user has chosen the second criteria, they are then presented with the third prompt
  if (requestCriteriaNum === 2) {
    thirdPrompt();
  };

  // After the user has chosen the third criteria, they are then presented with the fourth prompt
  if (requestCriteriaNum === 3) {
    fourthPrompt();
  };

  // After the user has chosen the fourth criteria, they are then presented with the fifth prompt
  if (requestCriteriaNum === 4) {
    fifthPrompt();
  };

  // The selectionAmount function will run to see if the user had selected atleast 1 character criteria
  selectionAmount();

  // A while loop is made to call the arrayRandomiser function that will use the arrays chosen by the user, 1 at a time
  let counter = 0;
  while (counter < lengthPrompt) {
    arrayRandomiser(randomCharsArrayChoice);
    counter ++;
  };

  // The array that contained the randomised characters is then joined to make a string which is then returned to the writePassword function
  passwordString = randomisedCharsArray.join("");
  return passwordString;
};

// If they confirm they want to begin then first prompt asking about length of characters initializes
var firstPrompt = function() {
  // Prompting how many characters they want and storing it in a variable
  lengthPrompt = window.prompt("Let's begin with the length, how many characters do you want between 8 and 128?");

  // This checks if the user types in anything or presses cancel to leave
  if (lengthPrompt) {

  // If the user did input numbers then the if/else statement checks the numbers
  // If the user inputs number less than 8 or more than 128 then an alert to try again appears and then directed to input again
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      window.alert("That wasn't between 8 and 128 characters, please try again.");
      firstPrompt();
    } 
    // If the user inputs a number between 8 and 128 then that number is returned in lengthPrompt
    else {
      // Criteria number increases by 1 as an indicator that the next prompts can be called
      requestCriteriaNum ++;
      return lengthPrompt;
    };

// If the user decided to cancel at the length prompt then they are alerted with a goodbye message and the project stops functioning
  } else {
    window.alert("Cheerio.");
    return;
  }; 
};

// secondPrompt for confirming lowercase characters and pushing the lowercase array to the array that stores the selected characters arrays
var secondPrompt = function() {
  // Confirming if user wants lowercase characters or not
  confirmLow = window.confirm("Would you like to add lowercase characters?");
  // Request criteria adds one to continue the prompt cycle
  requestCriteriaNum ++;
  if (confirmLow) {
    // Number of criteria adds 1 so we know how many criteria is selected
    numCriteria ++;
    // Pushes the confirmed character array to the empty array which will hold all confirmed character arrays
    randomCharsArrayChoice.push(charsLow);
  }};

// thirdPrompt for confirming uppercase characters and pushing the uppercase array to the array that stores the selected characters arrays
var thirdPrompt = function() {
  // Confirming if user wants uppercase characters or not
  confirmUp = window.confirm("Would you like to add uppercase characters?");
  // Request criteria adds one to continue the prompt cycle
  requestCriteriaNum ++;
  if (confirmUp) {
    // Number of criteria adds 1 so we know how many criteria is selected
    numCriteria ++;
    // Pushes the confirmed character array to the empty array which will hold all confirmed character arrays
    randomCharsArrayChoice.push(charsUp);
  }};

// fourthPrompt for confirming special characters and pushing the special character array to the array that stores the selected characters arrays
var fourthPrompt = function() {
  // Confirming if user wants special characters or not
  confirmSpec = window.confirm("Would you like to add special characters?");
  // Request criteria adds one to continue the prompt cycle
  requestCriteriaNum ++;
  if (confirmSpec) {
    // Number of criteria adds 1 so we know how many criteria is selected
    numCriteria ++;
    // Pushes the confirmed character array to the empty array which will hold all confirmed character arrays
    randomCharsArrayChoice.push(charsSpec);
  }};

// fifthPrompt for confirming number characters and pushing the number array to the array that stores the selected characters arrays
var fifthPrompt = function() {
  // Confirming if user wants number characters or not
  confirmNum = window.confirm("Would you like to add number characters?");
  // Request criteria adds one to continue the prompt cycle
  requestCriteriaNum ++;
  if (confirmNum) {
    // Number of criteria adds 1 so we know how many criteria is selected
    numCriteria ++;
    // Pushes the confirmed character array to the empty array which will hold all confirmed character arrays
    randomCharsArrayChoice.push(charsNum);
  }};  

// Prompt alerting if there wasn't more than one character criteria being selected
var selectionAmount = function() {
  if (numCriteria < 1) {
    window.alert("You need to select at least one criteria. Please try again.");
    return;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
