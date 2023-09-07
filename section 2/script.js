/* Section 1 */
// Activated Strict Mode
// Activated mode is a special mode activated in js which makes it easier to write js code
// To activated code write first 'use strict';  
// strict mode secure code & easy to identifying error in code

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive :D');

// const interface = 'Audio'; not working
// const private = 534; not working

// Functions

function logger() {
    console.log('My name is Pranali');         //function value 
}
//calling / running / invaking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23')

// Function Declaration vs Function Expressions
// Simply use 'function' keyword to declare a function -> function declaration


/* function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;                // we calculate the age first and then return a value 
} */

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;   // direct return a value
}

const age1 = calcAge1(1991);

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow Function 

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Pranali'));
console.log(yearsUntilRetirement(1980, 'Pro'));


// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// Reviewing Functions

//1] Function declaration: Function that can be used befoe it's declared
function calcAge(birthYear) {
    return 2037 - birthYear;
}

//2] Function expression: Essentially a function value stored in a variable
/* 
    const calcAge = function (birthYear) {
    return 2037 - birthYear;
} 
*/

//3] Arrow Function: Great for a quick one-line functions. Has no this keyword(more later..)
/*
const calcAge = birthYear => 2037 - birthYear;
*/

// * Three different ways of writting functions, but they all work in a simiilar way. receive input data, transform data, then output data
// * Main Components of the Function
/* 
- Function Name  
- Parameters: placeholders to receive input values. like local variables of function
- Function body: block of code that we want to reuse, processes the function input data
- Calling, running or invoking the function, using()
- Arguments: actual values of function parameters, to input data
- Variable to save returned value(function output)
- return statement to output a value from the function and terminate execution
*/

// Array 

const friend1 = 'vishu';
const friend2 = 'kunal';
const friend3 = 'omii';

const friends = ['vishu', 'kunal', 'omii'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['bob', 'alice']

const firstName = 'pranali';
const pranali = ['pranali', 'doremon', 2037 - 1991, 'teacher', friends];
console.log(pranali);
console.log(pranali.length);


// Basic Array Operations(Methods)

const friends1 = ['pranali', 'krish', 'shubhi'];

//add elements
const newLength = friends1.push('shree');
console.log(friends);
console.log(newLength);

friends1.unshift('abhi');
console.log(friends1);

//Remove elements
friends1.pop(); //last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.unshift(); //first
console.log(friends1);

