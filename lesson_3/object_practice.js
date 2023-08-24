// Challenge 1: Counting Properties
// Write a function called countProperties that takes an object as an argument and returns the number of properties in the object.
// function countProperties(obj) {
//   const objKeys = Object.keys(obj).length;
//   console.log(objKeys);
// }

// const testObj = {
//   a: 1,
//   b: 2,
//   c: 340,
// };

// countProperties(testObj);

// // Challenge 2: Sum of Object Values
// // Write a function called sumObjectValues that takes an object with numeric values and returns the sum of all the values.
// function addValues(obj) {
//   const allValues = Object.values(obj);
//   let sum = allValues.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   console.log(sum);
// }
// addValues(testObj);

// Write a function called swapKeyValue that takes an object as an argument and returns a new object where the keys and values are swapped.

// function swapKeyValue(obj) {
//   const swapped = Object.fromEntries(
//     Object.entries(obj).map((a) => a.reverse())
//   );
//   //   console.log(swapped);
//   return swapped;
// }

// const testObj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(swapKeyValue(testObj));
// Should print: { '1': 'a', '2': 'b', '3': 'c' }

// Write a function called frequencyCount that takes an array as an argument and returns an object with the frequency count of each element in the array.

// Create an empty object to store the frequency count.
// Iterate through the elements in the array.
// For each element, check if it exists as a property in the frequency count object.
// If it does, increment the value associated with that property.
// If it doesn't, add the property to the object with a value of 1.
// After iterating through all the elements, the frequency count object should contain the desired counts.
// Return the frequency count object.
// function frequencyCount(arr) {
//   let tally = {};
//   arr.forEach((element) => {
//     if (!Object.keys(tally).includes(String(element))) {
//       tally[element] = 1;
//     } else {
//       tally[element]++;
//     }
//   });
//   return tally;
// }

// const testArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 55, 101, 4, 2, 1];

// console.log(frequencyCount(testArray));
// Should print: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Write a function called objectValueSum that takes an object with numeric values and returns the sum of all the values.
function objectValueSum(obj) {
  let allNums = Object.values(obj);
  let sum = allNums.reduce((acc, init) => acc + init);
  return sum;
}

const testObj = {
  a: 10,
  b: 20,
  c: 30,
};

console.log(objectValueSum(testObj)); // Should print 60
