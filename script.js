// Assignment Code
var generateBtn = document.querySelector("#generate");

var includeLowercase
var includeUppercase
var includeSymbols
var includeNumbers 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function creates parameters for the users password
function generatePassword() {
  // This empty array will contain the functions that generate random characters for user password
  // The contents of the array will be conditional to the users input
  var charGeneratorFunctions = [];
  var charLength = parseInt(prompt("Enter a number between 8 and 128"));

  if (charLength < 8 || charLength > 128) {
    alert("Your password must be at least 8 characters and no more than 128")
    return generatePassword();
  }

  triggerAlerts()

// These if statements will push our generator functions into the charGeneratorFunctions
  if (includeLowercase) {
    charGeneratorFunctions.push(randomLower);
  }

  if (includeUppercase) {
    charGeneratorFunctions.push(randomUpper);
  }

  if (includeSymbols) {
    charGeneratorFunctions.push(randomSymbol);
  }

  if (includeNumbers) {
    charGeneratorFunctions.push(randomNumber);
  }

// userPassword is passed into a for loop to build the users password until it is the length chosen by the user 
var userPassword = '';
for (var i = 0; i < charLength; i++) {
  userPassword += charGeneratorFunctions[getRandomIndex(charGeneratorFunctions.length - 1)](); 
}
// var password within writePassword will be equal to userPassword
  return userPassword;
}

// function creates a random number within a given range using Math.floor
function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * (arrayLength - 0 + 1) + 0);
}
  
  //Password generator functions
  function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function randomNumber() {
    return Math.floor(Math.random() * 10).toString();
  }
  
  function randomSymbol() {
    var symbols = "!@#$%^&*()[]{}<>?/";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // This function gets input from the user about parameters of password content
  // This function was placed outside of generatePassword to run independently without conflicting with the other alert
  function triggerAlerts () {
    includeLowercase = confirm("Include lowercase?");
    includeUppercase = confirm("Include uppercase?");
    includeSymbols = confirm("Include symbols?");
    includeNumbers = confirm("Include numbers?");

  // If statement in the case the user returns false for each boolean, an alert is given and the function repeats
  if (!includeLowercase && !includeUppercase && !includeSymbols && !includeNumbers) {
      alert("You must choose at least one character type.")
      return triggerAlerts()
    }
  }