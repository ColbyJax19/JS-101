// // Exercise 1: Map Function
// Write a function called doubleArray that takes an array of numbers as input and returns a new array where each number is doubled. Use the map higher-order function.

// let filteredResults = [1, 2, 3, 4, 5, 6];
// function doubleArray(array) {
//   let newArray = array.map((index) => index * 2);
//   return newArray;
// }
// console.log(doubleArray(testArray));

// Exercise 2: Filter Function
// Write a function called getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers. Use the filter higher-order function.

// let testArray = [1, 2, 3, 4, 5, 6];
// function filterEven(array) {
//   let filteredResults = array.filter((index) => index % 2 === 0);
//   return filteredResults;
// }
// console.log(filterEven(testArray));

// Exercise 3: Reduce Function
// Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers. Use the reduce higher-order function.

// let testArray = [1, 2, 3, 4, 5, 6];
// function sumArray(array) {
//   let results = array.reduce(
//     (accumulator, initialValue) => accumulator + initialValue
//   );
//   return results;
// }
// console.log(sumArray(testArray));

// Exercise 4: Higher-Order Function Composition
// Write a function called compose that takes two functions f and g as input and returns a new function that applies f to the result of applying g to its input.

// For example, if we have functions addOne that adds 1 to a number and double that doubles a number, the composition compose(double, addOne) should return a new function that first adds 1 to the input and then doubles the result.

// function addOne(num) {
//   return num + 1;
// }

// function double(num) {
//   return num * 2;
// }

// // Generalized higher order function that returns the result of two functions.
// function compose(func1, func2) {
//   return function (x) {
//     return func1(func2(x));
//   };
// }
// let composedFunction = compose(double, addOne);
// console.log(composedFunction(20));
