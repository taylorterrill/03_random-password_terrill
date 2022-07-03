
// Assignment Code
var generateBtn = document.querySelector("#generate");

// asks user for character length
function askCharAmount() {
  var charAmount = prompt("Please chose a password length between 8-128 characters:")
    if (charAmount < 8 || charAmount > 128) {
      alert("Please chose a value between 8-128")
      askCharAmount()
    } else {
      console.log (charAmount)
      return charAmount
    }
}

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

// generates password based on character code inputs
function arrayLowHigh(low, high) {
  let array = []; 
  for (let i = low; i <=high; i++) {
    array.push(i)
  }
  return array;
}

// generates password and based on inputs from user
function generatePassword(charAmount, includeUpper, includeNumber, includeSymbol) {
  console.log("button has been clicked");
  var charCodes = lowerCaseCode;

  if (includeUpper) charCodes = charCodes.concat(upperCaseCode);
  if (includeNumber) charCodes = charCodes.concat(numberCode);
  if (includeSymbol) charCodes = charCodes.concat(symbolCode);

  var passwordChars = []
  for (let index = 0; index < charAmount; index++) {
     var charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
     passwordChars.push(String.fromCharCode(charCode));
  }

  return passwordChars.join('');
}




// prompts user for password parameters
function writePassword() {
  var charAmount = askCharAmount();
  
  var upperPrompt = confirm("Would you like to include upper case letters? (click 'OK' for Yes and 'Cancel' for No)");
    if (upperPrompt) {
      var includeUpper = true
      console.log ("includeUpper = " + includeUpper)
    } else {
      var includeUpper = false
      console.log ("includeUpper = " + includeUpper)
    }
  
  var numberPrompt = confirm("Would you like to include numbers? (click 'OK' for Yes and 'Cancel' for No)");
    if (numberPrompt) {
      var includeNumber = true
      console.log ("includeNumber = " + includeNumber)
    } else {
      var includeNumber = false
      console.log ("includeNumber = " + includeNumber)
    }

  var symbolPrompt = confirm("Would you like to include special characters? (click 'OK' for Yes and 'Cancel' for No)");
    if (symbolPrompt) {
      var includeSymbol = true
      console.log ("includeSymbol = " + includeSymbol)
    } else {
      var includeSymbol = false
      console.log ("includeNumber = " + includeSymbol)
    }

  // calls function to generate password, giving parameters based on user input
  var password = generatePassword(charAmount, includeUpper, includeNumber, includeSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

