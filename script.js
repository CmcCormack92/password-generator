// Assignment code here

//min character length function
    var getMinLength = function () {
        var minLength = parseInt(window.prompt("What is the minimum number of characters for your password? Please choose a number between 8 and 128."));


        if (!minLength || minLength < 8 || minLength >128) {
            window.alert("You need to provide a valid input.")
            getMinLength();
        } else {
            passwordCriteria.minLength = minLength;
            console.log(passwordCriteria.minLength);
        }
    };

    //max character length function
    var getMaxLength = function () {
        var maxLength = parseInt(window.prompt("What is the maximum number of characters for your password? Please choose a number between 8 and 128 that higher than the minimum chosen."));


        if (!maxLength || maxLength <= passwordCriteria.minLength || maxLength > 128 ) {
            window.alert("You need to provide a valid input.")
            getMaxLength();
        } else {
            passwordCriteria.maxLength = maxLength;
            console.log(passwordCriteria.maxLength);
        }
    };

    //confirm all character types
    var characterTypes = function() {

       var confirmLowercase = window.confirm("Would you like to include lowercase character's?");
       if (confirmLowercase) {
       passwordCriteria.lowercase = "lowercase";
       console.log(passwordCriteria.lowercase);
       }

       var confirmUppercase = window.confirm("Would you like to include uppercase character's?");
       if (confirmUppercase) {
       passwordCriteria.uppercase = "uppercase";
       console.log(passwordCriteria.uppercase);
       }

       var confirmSpecial = window.confirm("Would you like to include special character's?");
       if (confirmSpecial) {
       passwordCriteria.special = "special";
       console.log(passwordCriteria.special);
       }

       var confirmNumbers = window.confirm("Would you like to include numeric character's?");
       if (confirmNumbers) {
       passwordCriteria.numbers = "numeric";
       console.log(passwordCriteria.numbers);
       }
    };

    



//criteria object
var passwordCriteria = {
    minLength: "",
    maxLength: "",
    lowercase: "",
    uppercase: "",
    special: "",
    numbers: ""
};

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '_', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '{', '}', '|', '~', "'"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    getMinLength();
    getMaxLength();
    characterTypes();

    window.alert("You have chose a password with a minimum of " + passwordCriteria.minLength + " and maximum of " + passwordCriteria.maxLength + " character's. Your password will include " + passwordCriteria.uppercase + " " + passwordCriteria.lowercase + " " + passwordCriteria.numbers + " " + passwordCriteria.special + " character's.");
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

