// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var charLengthMin = parseInt(prompt("Enter the minumum number of characters for desired password"));
    var charLengthMax = parseInt(prompt("Enter the maxiumum number of characters for desired password"));
    var includeLowercase = confirm("Include lowercase?");
    var includeUppercase = confirm("Include uppercase?");
    var includeSymbols = confirm("Include symbols?");
    var includeNumbers = confirm("Include numbers?");
  
    var password = ""
  
    if (includeLowercase === true) {
      var i = 0; i < 8; i++;
      getRandomLower()
      password += 
    }
  }
  
  //Password generator functions
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  function getRandomSymbol() {
    const symbols = "!@#$%^&*()[]{}<>?/";
    return symbols[Math.floor(Math.random() * symbols.length)];