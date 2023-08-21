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


