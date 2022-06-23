// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

function generatePassword() {

  //asking user if they want to begin and with criteria//
  var confirm = window.confirm("The password will contain a series of numbers that you get to select as well as the length, are you ready to begin?");

  let lengthPrompt;
  //if the user wants to begin or not creating the password criteria with function//
  //if they confirm they want to being then first prompt asking about length of characters//
  var firstPrompt = function() {
    if (confirm) {
    lengthPrompt = window.prompt("Let's begin with the length, how many characters do you want between 8 and 128 characters?");
    return lengthPrompt;
  } else {
    window.alert("Cheerio.")
    return;
  }
}
  
  firstPrompt()

  if (lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("That wasn't between 8 and 128 characters, please try again.")
    firstPrompt()
  }




} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
