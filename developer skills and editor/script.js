"use strict";

// Real problem by using  google, stackoverflow and MDN

/* We work for a company building a smart home thermometer. 
Our most recent task is this: " Given an array of temperatures of one day, 
calculate the temperature amplitude. keep in mind that sometimes there might be 
a sensor error"*/
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1] Understanding the problem
// - what is temp amplitude? answer: is difference between highest and lowest temp
// - How to compute max and min temperatures
// - Whats a sensor error? and what do?

// 2] Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find Min value in temp array
// - Subtract min from max (amplitude) and return it

//Find max value in temp array: ->
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calcTempAmplitude([3, 7, 4]);

//Subtract min from max (amplitude) and return it

const calcTempAmplitude1 = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
};
calcTempAmplitude1([3, 7, 4, 1, 8]);

//  How to ignore errors?

const calcTempAmplitude2 = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude2(temperatures);
console.log(amplitude);

/* PROBLEM 2: 
function shoul now receive 2 arrays of temps

1] understanding the problem  
- with 2 arrays, should we implement functionality twice? NO1 just merge two arrays

2] Breaking up into sub-problems
- How to merge 2 arrays 
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // fix
    //value: Number(prompt("Degrees celsius:")),
    velue: 10,
  };

  // find

  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(mesruement.value);
  // console.error(mesurement. value);

  const kelvin = (measurement.value = 273);
  return kelvin;
};
//Q] Identify
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify  bug
console.log(amplitudeBug);
