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

friends1.shift(); //first
console.log(friends1);

console.log(friends1.indexOf('krish'));
console.log(friends1.indexOf('shubhi'));

friends1.push(23);
console.log(friends1.includes('krish'));
console.log(friends1.includes('shubhi'));
console.log(friends1.includes(23));

if (friends1.includes('krish')) {
    console.log('You have a friend called shubhi');
}


// Introduction To Objects
// objects is  data structure of js
// There are multiple ways to creating objects

const jonasArray = [
    'Jonas',
    'jay',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Stevan']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends2: ['Michael', 'Peter', 'Stevan']
};
console.log(jonas);

// Dot ve Bracket Notation
// How to retrive data from objects & also how to change data in a objects using dot and bracket notation

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends2: ['Michael', 'Peter', 'Stevan']
};
console.log(jonas1);

console.log(jonas1);

console.log(jonas1.lastName);   // Dot notation .
console.log(jonas1['lastName']); // Bracket notation []

const nameKey = 'Name';
console.log(jonas1['first' + nameKey]);
console.log(jonas1['last' + nameKey]);

// console.log(jonas.'last' + nameKey) // This will not work need [] bracket notation

const interestedIn = prompt('what do you want o know about jonas? choose between firstName, LastName, age, job, friends2');

//console.log(jonas[interestedIn]);     //Bracket function gives correct output
//console.log(jonas.interestedIn);     //this function output is undefined

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! choose between firstName, LastName, age, job, friends2')
}

jonas.location = 'Aurangabad';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// challenge: jonas has 3 friends, and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends2.length} friends, and his best friend is callled ${jonas.friends2[0]}`);


//OBJECT METHOD

const pro = {
    firstName: 'Pro',
    lastName: 'Pandhare',
    birthY: '1991',
    job: 'Engineer',
    friends2: ['Runali', 'sakshi', 'Siddhi'],
    hadDriversLiceense: true,

    //calcAge: function (birthY) {
    //  return 2037 - birthY;
    //}
    calcAge: function () {
        this.age = 2037 - this.birthY;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year old ${pro.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }

};

console.log(pro.calcAge(1991));

console.log(pro.age);
console.log(pro.age);

//console.log(pro['calcAge'](1991)); 

//Challenge
// Pro is a 46 year old teacher, and he has a driver's license

console.log(pro.getSummary());

// ITERATION: THE FOR LOOP

/*console.log('Lifting weights repitation 1');
console.log('Lifting weights repitation 2');
console.log('Lifting weights repitation 3');
console.log('Lifting weights repitation 4'); */

// for loop keeps running until condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitation ${rep}`);
};


// LOOPING ARRAYS, BREAKING AND CONTINUING 

const pro1 = [
    'pro',
    'Jay',
    2037 - 1991,
    'teacher',
    ['mau', 'kau', 'bau'],
    true
];

const types = []; //empty array

//console.log(pro[0]);
//console.log(pro[1]);
//...
//console.log(pro[4])
// pro[5] does not exist 


for (let i = 0; i < pro1.length; i++) {
    console.log(pro1[i], typeof pro1[i]);

    // filling types array
    // types[i] = typeof pro1[i];
    types.push(typeof pro1[i]);
}

console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++) {
    ages.push(2037 - year[i]);
}

console.log(ages);

//CONTINUE AND BREAK STATEMENT 

// CONTINUE STATMENT
console.log('--- ONLY STRINGS---')
for (let i = 0; i < pro1.length; i++) {
    if (typeof pro1[i] !== 'string') continue;

    console.log(pro1[i], typeof [i]);
}

// Break statement
console.log('--- BREAK WITH NUMBER---')
for (let i = 0; i < pro1.length; i++) {
    if (typeof pro1[i] !== 'number') break;

    console.log(pro1[i], typeof [i]);
}

// LOOPING BACKWARD AND LOOPS IN LOOPS

const om = [
    'Om',
    'shreyas',
    2037 - 1991,
    'Charter Accountant',
    ['shreyu', 'pratik', 'yash']
]

// 0, 1, ...., 4
// 0, 3,....., 5

for (let i = om.length - 1; i >= 0; i--) {
    console.log(i, om[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------STARTING EXERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Eercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// THE WHILE LOOP 

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6)
console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 1);
    if (dice === 6) console.log('Loop os about to end... ')
}