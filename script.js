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
// Prompts and confirm statements regarding parameters for password
// Here I used parseInt to convert the string containing an integer into an actual integer
function generatePassword() {
    var charLengthMin = parseInt(prompt("Enter the minumum number of characters for desired password"));
    var charLengthMax = parseInt(prompt("Enter the maxiumum number of characters for desired password"));
    var includeLowercase = confirm("Include lowercase?");
    var includeUppercase = confirm("Include uppercase?");
    var includeSymbols = confirm("Include symbols?");
    var includeNumbers = confirm("Include numbers?");
// Control flow to make sure user chooses at least one character type
    if (
        includeLowercase === false &&
        includeUppercase === false &&
        includeSymbols === false &&
        includeNumbers === false
    ) {
        alert("Password must include a character type!");
    }
}
    // Runs function again
    generatePassword();
}
    // Setting up password length to be between the min and max
    var passwordLength = generatePasswordLength(charLengthMin, charLengthMax);
    console.log(passwordLength);
    // Empty string to which we will append the random characters
    var password = ""
  // for loop which will add new characters to our string until the length requirements are met
    for (var i = 0; i < passwordLength; i++) {
  // all if statements run independently of one another
  // each loop creates 4 characters if the user chooses to include all types
    if (includeLowercase === true) {
        password += randomLower();
    }
    if (includeUppercase === true) {
        password += randomUpper();
    }
    if (includeSymbols === true) {
        password += randomSymbol();
    }
    if (includeNumbers === true) {
        password += randomNumber();    
    }
    }
// This statement takes a slice from the password string that is exactly the password length
    var passwordText = password.slice(0, passwordLength);
// grabs the password display element and assigns the password to text content, thus displaying it
    document.querySelector("#password").textContent = passwordText;
}

// function creates a random number within a given range using Math.floor
function generatePasswordLength(charLengthMin, charLengthMax) {
    return Math.floor(Math.random() * (charLengthMax - charLengthMin + 1) + charLengthMin);
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