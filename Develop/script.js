// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

let lengthPrompt;
let charsLowString = "abcdefghijklmnopqrstuvwxyz";
let charsUpString = charsLowString.toLocaleUpperCase();
let charsSymbString = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
let charsNumString = "0123456789"

/*Function to turn the strings of characters into arrays*/

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
}



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
    
  }






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
