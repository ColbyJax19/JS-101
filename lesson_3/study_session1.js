// const isEmpty = (value) => {
//   if (value.length > 0) return false;
//   if (value.length === 0) return true;
//   return Object.keys(value).length === 0;
// };

// let arr = [];
// arr['foo'] = 'bar';
// arr[-1] = 'boo';
// console.log(arr);

// let sparseArr = [];
// sparseArr.length = 3;

// console.log(isEmpty([]));
// console.log(isEmpty(arr));
// console.log(isEmpty(['Janice']));
// console.log(isEmpty(sparseArr));

// isEmpty is a function expression that takes in one parameter, value. Inside of the function body, we first have an if statment that evaluates whether the argument passed to the funciton has a length greater than 0. If this statment is truthy, we return false. We then have another if statemnt that returns true is the value length is exactly 0.
// Finally, we return the result of Object.keys on that argument, which will return a boolean of true, if the length of the keys passed to the function is exactly 0, else it will return false.
// Line 16 returns false because there are no values populated in the array, therefore the length is 0.

// Explain the output of this code snippet and why it is so?

// const fruits = ['apple', 'banana', 'mango', 'orange'];
// for (let fruit of fruits) {
//   if (fruit === 'mango') {
//     console.log('I love mangoes!');
//   } else {
//     console.log(`I don't like ${fruit}s.`);
//   }
// }

// Colby

// We have a variable declaration and assignement to an array containing fruits.
// We have a for/of loop that iterates through the declared array "fruits". // mention if it's iterating values or indexes

// I don't like apples.
// I don't like bananas.
// I love mangoes!
// I don't like oranges.

// This loop takes in the fruits array and iterates over it.
// On our first iteration, if is not passed, so we get the first output.
// Instructors note// condition returns false, and the else block runs (first output seems like it's the if block's console that's going to run)
// The same output applies for bananas.
// Next, we get mangoes, so we console.log after the first is statement "I love Mangoes"
// Like the others, we get a console.log of I don't like oranges" last, because the if statement is falsy, so else is run.

// Explain the output of this code snippet and why it is so?

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) console.log(numbers[i]);
}
// User Case: The user wants to log to the console numbers that are even.

// Implementation:
// The numbers variable is declared and initialized to an array containing numerical values.
// The for loop iterates through the array, creating the local variable i to represent the array's currently evaluated index.
// If the remainder of that value after being divided by 2 is strictly equal to 0, the number is logged to the console.
