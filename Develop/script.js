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

  //if the user wants to begin or not creating the password criteria//
  if (confirm) {
    var firstPrompt = window.prompt("Let's begin with the length, how many characters do you want between 8 and 128 characters?")
  } else {
    window.alert("Cheerio.")
    return;
  }


} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
