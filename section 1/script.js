let js = "amazing";
console.log(40 + 8 + 23 - 10);

//Variables in Js
// we can store a values in variables
console.log("Pranali");
console.log(23);

let firstName = "Pranu";
console.log(firstName);

let jonas_matilda = "PP";
let $function = 37;

let person = " jeans";
let PI = 3.14;

let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);

// Data types in Js
// Every value is a object and primitive
// There are 7 types of primitive data types: number, string, boolean, undefined, null,symbol, bigint
// Js has dynamic typing: we don't have to manually define the data type of the value stored in a variable, instead, data types are determined automatically

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'pranali');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let, const, var
// let is used for reassign variables and new take a variable
// const used if variable can't be changed
// 

let age = 30;
age = 31;

const birthYear = 2002;
// birthYear = 2003;

var job = 'programmer';
job = 'teacher';

lastName = 'schemedmann'
console.log(lastName);

//Basic Operators
// Arithmatic, assignment,comparision ,  


// Arithmetic Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const secondName = 'Jonas';
const thirdName = 'schmedmann';
console.log(firstName * ' ' * lastName);

//Assignment Operator
let x = 10 + 5;
x *= 10;
x *= 4;
x++;
x--;
console.log(x);

// Camparison Operator
console.log(ageJonas > ageSarah);
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operator Precedure

console.log(now - 1991 > now - 2018);

let c, y;
c = y = 25 - 10 - 5;
console.log(c, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

// String and templete literals(``)

const pName = 'pranali';
const company = 'teacher';
const birthDate = 19;
const month = 2037;

const pranali = "I'm " + pName + ', a ' + (month - birthDate) + ' month old ' + company + '!';
console.log(pranali);

const pranaliNew = `I'm ${pName} a ${month - birthDate}  month old  ${company} !`;
console.log(pranaliNew);

console.log(`Just a regular string....`);

console.log('string with \n\
multiple\n\
lines');

console.log(`String 
multiple
lines`);

//if  else statement
//if else statement works like after written 'if' condition is written in the '()' if condition is true then '{}' this block code is executed
// if condition written in '()' is false the else '{}' block will be executed

const age1 = 19;
const isOldEnough = age1 >= 20;

if (isOldEnough) {
    console.log('Minu can start driving license');
} else {
    const yearsLeft = 20 - age1;
    console.log(`Minu is too young. wait another ${yearsLeft} years :`)
}

const birthYear1 = 2012;

let century;
if (birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type conversion 

const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Pranali'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log(' I am ' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' * '2');


let n = '1' + 1;
n = n - 1;
console.log(n);

//Truthy and Falsy Values
// 5 falsy calues: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(pranali));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all  ;");
} else {
    console.log('You shoul get a job!');
}

let height;               //let height = 123; defined
if (height) {             // let height = 0; undefined   
    console.log('Yay! height is defined');
} else {
    console.log('height is UNDEFINED');
}

// Equality Operator == vs. ===

const age2 = 18;
if (age2 === 18) console.log('You just becaome an adult : D (strict)');

// In this case no need '{}' this block directly write the console line

if (age2 === 18) console.log('You just becaome an adult : D (loose)');

const favourite = prompt("what's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { //22 === 23 -> FALSE
    console.log('Cool! 23 id an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number ')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('number is not 23 or 7 or 9')
};

if (favourite !== 23) console.log('Why not 237');


// Boolean Logic: The AND, OR & NOT operators
// A AND B: true when ALL are true
// A OR B: true when ONE is true
// NOT A, NOT B: Inverts true/false
// It is used by using Boolean

// Logical Operators

const hasDriversLicense = true // A 
const hasGoodVision = false    // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense || hasGoodVision) {
    console.log('pranali is able to drive!');
} else {
    console.log('someone else should drive..');
}

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired);


// The Switch Statement

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday' --> if this condition is true then following conditions executed
        console.log('Plam course structure');
        console.log('Go to coding meetup');
    //break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;     // 'break' stop execution
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log('record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend: D');
        break;
    default:
        console.log('Not a valid day!');
}

// Above statement works in 'if_else' statement

const day1 = 'friday';

if (day1 === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day1 === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day1 === 'wednesday' || day1 === 'thursday') {
    console.log('write code example');
} else if (day1 === 'friday') {
    console.log('Not a valid day!');
} else if (day1 === 'saturday' || day1 === 'sunday') {
    console.log('Enjoy the weekend: D');
} else {
    console.log('error');
}

// statements and expressions 

// Expression is piece of code that produces a value 
// 3 + 4 it is a example of a expression because it produces a value
// other exaple : 1] 1991 2] true && false && false

if (23 > 10) {
    const str = '23 is bigger';
    // here declare a value but doesn't produce a value 
    // and str is an expression and whole line of code is a statment
}

console.log(`I'm ${2037 - 2002} years old,`)

// here ${2037 - 2002} this is an expression

const me = 'Pranali';
console.log(`I'm ${2037 - 2002} years old ${me}`)

// above '${me}' also accepted by js because it is also a statement
// but js not accept the "if (23 > 10) {const str = '23 is bigger';}" this if unknown token because it is a statment



// The Conditional(Ternary) Operators

// 1
const age4 = 23;
age4 >= 18 ? console.log('I like to drink wine') :  //'if' part
    console.log('I like to drink water');           //'else' part 

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// 2
let drink2;
if (age >= 18) {
    drink2 = 'water';
} else {
    drink2 = 'wine';
}
console.log(drink2);

// 3 

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// ternary operator is not a replacment of if_else statment
// It is used mostly in we neeed to take a quik decision


