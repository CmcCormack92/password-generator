// Assignment code here

//min character length function
var getMinLength = function () {
    var minLength = parseInt(window.prompt("What is the minimum number of characters for your password? Please choose a number between 5 and 150."));


    if (!minLength || minLength < 5 || minLength > 150) {
        window.alert("You need to provide a valid input.")
        getMinLength();
    } else {
        passwordCriteria.minLength = minLength;
        console.log(passwordCriteria.minLength);
    }
};

//max character length function
var getMaxLength = function () {
    var maxLength = parseInt(window.prompt("What is the maximum number of characters for your password? Please choose a number between 5 and 150 that is also higher than the minimum chosen."));


    if (!maxLength || maxLength <= passwordCriteria.minLength || maxLength > 150) {
        window.alert("You need to provide a valid input.")
        getMaxLength();
    } else {
        passwordCriteria.maxLength = maxLength;
        console.log(passwordCriteria.maxLength);
    }
};

//confirm all character types
var characterTypes = function () {

    var confirmLowercase = window.confirm("Would you like to include lowercase character's?");
    if (confirmLowercase) {
        passwordCriteria.lowercase = "lowercase,";
        console.log(passwordCriteria.lowercase);
    }

    var confirmUppercase = window.confirm("Would you like to include uppercase character's?");
    if (confirmUppercase) {
        passwordCriteria.uppercase = "uppercase,";
        console.log(passwordCriteria.uppercase);
    }

    var confirmSpecial = window.confirm("Would you like to include special character's?");
    if (confirmSpecial) {
        passwordCriteria.special = "special,";
        console.log(passwordCriteria.special);
    }

    var confirmNumbers = window.confirm("Would you like to include numeric character's?");
    if (confirmNumbers) {
        passwordCriteria.numbers = "numeric,";
        console.log(passwordCriteria.numbers);
    }

    if (passwordCriteria.lowercase + passwordCriteria.uppercase + passwordCriteria.special + passwordCriteria.numbers === "") {
        window.alert("Please choose at least one character.");
        characterTypes();
    }
};

//Creates a random length to use
var randomizeLength = function () {

    var length = Math.floor(Math.random() * (passwordCriteria.maxLength - passwordCriteria.minLength) + passwordCriteria.minLength);
    passwordCriteria.randomLength = length;
    console.log(passwordCriteria.randomLength);
};

// Generates password in browser
var generatePassword = function () {

    getMinLength();
    getMaxLength();
    characterTypes();
    
    window.alert("You have chose a password with a minimum of " + passwordCriteria.minLength + " and maximum of " + passwordCriteria.maxLength + " character's. Your password will include " + passwordCriteria.uppercase + " " + passwordCriteria.lowercase + " " + passwordCriteria.numbers + " " + passwordCriteria.special + " character's.");

    randomizeLength();
    getPassword();

};




//criteria object
var passwordCriteria = {
    minLength: "",
    maxLength: "",
    lowercase: "",
    uppercase: "",
    special: "",
    numbers: "",
    randomLength: "",
    password: ""
};

var characters = {

    lowLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',],

    upLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

    specialChar: ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '_', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '{', '}', '|', '~', "'"]
};

//Array chosen characters go to
var passArr = []

//function that creates the password
var getPassword = function() {

        if (passwordCriteria.lowercase === "lowercase") {
            passArr.push(...characters.lowLetters);
        }

        if (passwordCriteria.uppercase === "uppercase,") {
            passArr.push(...characters.upLetters);
        }
    
        if (passwordCriteria.special === "special,") {
            passArr.push(...characters.specialChar);
        }

        if (passwordCriteria.numbers === "numeric,") {
           passArr.push(...characters.numbers)
        }
        console.log(passArr);

        for (var i = 0; i < passwordCriteria.randomLength; i++) {
            passwordCriteria.password += passArr[Math.floor(Math.random() * passArr.length)];
        }
        console.log(passwordCriteria.password)
    };



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordCriteria.password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
