// SINGLE LINE COMMENT
/* MULTI-LINE COMMENT */

/* The JS code below is an example STATEMENT(instruction/command) every statement ends in a SEMICOLON */
console.log("hello world");

// DECLARE a new variable (make space)
let username;

// ASSIGN a value to a variable 
username = "ms.walter13"; 

// see the value stored in a variable 
console.log(username);

// DECLARE + ASSIGN in one line
let pokemon = "pikachu"; 
let luckyNum = 4; //no quotes around numbers!

// look at our new variables 
console.log(pokemon)
console.log(luckyNum)

// change the value stored in a var
luckyNum = 15
console.log(luckyNum)

// MATH OPERATORS (+, -, *, /)
let age = 16;
console.log(age)
let ageInTen = age+10;
console.log(ageInTen)
let ageDogYears = age / 7;
console.log(ageDogYears)
let crimsonHumanYears = 3 * 7;
console.log(crimsonHumanYears)

// PEMDAS applies when you have multiple operators

let score = 0;
score = score + 8 - 9 / 21 * 4 + 6
console.log(score);

//combine 2 "litteral" strings (CONCATENATION)
console.log("My age is " + "age")
let students = "Jorndnyn, zach, asiya me"
let teacher = "Mrs.Walter"
console.log("My Class is " + students + " and " + teacher)





/* FUNCTIONS:
Reusable sets of code statements that preform a specific task/process/routine
*/


//console.log is a built-in function we use
console.log("I just used a function")

// DEFINE (create) your own function 
function prepareForSleep() {
    console.log("1. Put on PJ's")
    console.log("2. Brush teeth")
    console.log("3. Getting in bed")
}

//CALL (use) our 
prepareForSleep();
