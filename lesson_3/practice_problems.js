// What will the below code return.

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// Answer: the array will now have 7 slots, [1,2,3, undefinded, undefinded, undefinded, 5]

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4]; // what will this line return?
// undefined

// // How can you determine whether a given string ends with an exclamation mark (!)?
// let str1 = 'Come over here!'; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith('!'));
// console.log(str1.endsWith('?'));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(Object.keys(ages).includes('Spot'));
// console.log(ages.hasOwnProperty('spot'));

// let munstersDescription = 'the Munsters are CREEPY and Spooky.';
// // => The munsters are creepy and spooky.
// let lower = munstersDescription.toLowerCase();

// munstersDescription = munstersDescription[0].toUpperCase() + lower.substring(1);
// console.log(munstersDescription);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges);
// console.log(ages);

// let str1 =
//   'Few things in life are as important as house training your pet dinosaur.';
// let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';
// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// let advice =
//   'Few things in life are as important as house training your pet dinosaur.';

// // Expected return value:
// // => 'Few things in life are as important as '
// advice = advice.slice(0, advice.indexOf('house'));
// console.log(advice);

// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
// let numbers = [1, 2, 3, 4, 5];
// // numbers.reverse();
// console.log('first', numbers); // [ 5, 4, 3, 2, 1 ]
// reversedArray = numbers.slice().reverse();
// console.log('second', reversedArray);

// numbers = [1, 2, 3, 4, 5];
// // numbers.sort((num1, num2) => num2 - num1);
// // console.log('third', numbers); // [ 5, 4, 3, 2, 1 ]
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray);

// Given a number and an array, determine whether the number is included in the array.
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// console.log(numbers.includes(22));

// let famousWords = 'seven years ago...';
// console.log('Four score and ' + famousWords);

// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);

// let nestedArray = ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']];
// console.log(nestedArray.flat());

// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };
// console.log(
//   Object.entries(flintstones)
//     .filter((pair) => pair[0] === 'Barney')
//     .shift()
// );

// How would you check whether the objects assigned to variables numbers and table below are arrays?
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Write a one-line expression to count the number of lower-case t characters in each of the following strings:
// let statement1 = 'The Flintstones Rock!';
// let statement2 = 'Easy come, easy go.';
// console.log(statement1.split('').filter((char) => char === 't').length);
// console.log(statement2.split('').filter((char) => char === 't').length);

// Write three different ways to remove all of the elements from the following array:
// let numbers = [1, 2, 3, 4];
// // numbers.length = 0;
// // while (numbers.length) {
// //   numbers.pop();
// // }
// numbers.splice(0, numbers.length);
// console.log(numbers);

// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// function isColorValid(color) {
//   if (color === 'blue' || color === 'green') {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// for (let padding = 0; padding <= 10; padding++) {
//   console.log(' '.repeat(padding) + 'The Flintstones Rock!');
// }

// let munstersDescription = 'The Munsters are creepy and spooky.';
// console.log(
//   munstersDescription
//     .split('')
//     .map(function (char) {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join('')
// );
