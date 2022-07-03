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
// var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var  specialChar = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "]"];

// variables to get lower case, upper case, numbers, and/or symbols
var lowerCaseCode = arrayLowHigh(97, 122);
var upperCaseCode = arrayLowHigh(65, 90);
var numberCode = arrayLowHigh(48, 57);
var symbolCode = arrayLowHigh(65, 90).concat(
  arrayLowHigh(58, 64)
).concat(
  arrayLowHigh(91, 96)
).concat(
  arrayLowHigh(123, 126)
)

function arrayLowHigh(low, high) {
  let array = []; 
  for (let i = low; i <=high; i++) {
    array.push(i)
  }
  return array;
}





//Generates and Displays Password
//need to create variable for character amount based on what user selects in alert box (charAmount)
function generatePassword(charAmount, includeUpper, includeNumber, includeSymbol) {
  console.log("button has been clicked");
  var charCodes = lowerCaseCode;
  // Need to Create these variables for when the user selects them in the alert box (includeUpper, includeNumber, includeSymbol,)
  if (includeUpper) charCodes = charCodes.concat(upperCaseCode);
  if (includeNumber) charCodes = charCodes.concat(numberCode);
  if (includeSymbol) charCodes = charCodes.concat(symbolCode);

  var passwordChars = []
  for (let index = 0; index < charAmount; index++) {
     var charCode = charCodes[Math.floor(Math.random() * charCodes.length)]; //Math might not be working, looks like a var
     passwordChars.push(String.fromCharCode(charCode));
  }

  return passwordChars.join('');
}


// Write password to the #password input
/* on click, writePassword function is called. 
alert box asks user for password length between 8-128 - if not in that range, alert user - charAmount variable
alert box for upper case - creates includeUpper var
alert for number - creates includeNumber var
alert for symbols - creates includeSymbol var
generates password


*/
function askCharAmount() {
  var charAmount = prompt("Please chose a password length between 8-128 characters:")
    if (charAmount < 8 || charAmount > 128) {
      alert("Please chose a value between 8-128")
      askCharAmount()
    } else {
      return charAmount
    }
}

function writePassword() {
  var charAmount = askCharAmount();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

