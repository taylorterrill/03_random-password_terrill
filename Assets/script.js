//1. prompt user for password criterea
//   password length between 8 and 128
//   include lowercase, uppercase, numeric, and special character?
//2. validate input
//   check character length
//   at least one character type
//3. generate password
//4. display password


// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialChar = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "]"];


//Generates and Displays Password
function generatePassword() {
  console.log("button has been clicked");

  return "generated password";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

