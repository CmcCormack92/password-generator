// Assignment code here

//character length function
var getPassLength = function () {
    var passLength = parseInt(window.prompt("How many character's would you like your password to be?"));

    if (passLength < 8 || passLength > 128) {
        window.alert("You need to provide an input between 8 and 128 character,s.");
        getPassLength();
    } else if (!passLength) {
        getPassLength();
    } else {
        passwordCriteria.length = passLength;
        console.log(passwordCriteria.length);
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


// Generates password in browser
var generatePassword = function () {
    passwordCriteria.lenght = "";
    passwordCriteria.lowercase = "";
    passwordCriteria.uppercase = "";
    passwordCriteria.special = "";
    passwordCriteria.numbers = "";
    passwordCriteria.password = "";
    passArr = [];
    
    getPassLength();
    characterTypes();
    
    window.alert("You have chose a password with a length of " + passwordCriteria.length +  " character's. Your password will include " + passwordCriteria.uppercase + " " + passwordCriteria.lowercase + " " + passwordCriteria.numbers + " " + passwordCriteria.special + " character's.");

    getPassword();
    
   
};

//criteria object
var passwordCriteria = {
    length: "",
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

        if (passwordCriteria.lowercase === "lowercase,") {
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

        for (var i = 0; i < passwordCriteria.length; i++) {
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
