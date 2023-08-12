// Define Psuedocode for the following functions

// a function that returns the sum of two numbers

// Given a set of to numbers
// Return the sum of the first and second numbers

// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// Given an array of strings
// return all the strings concatenated together using the spread operator

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
// everyOther([1, 4, 7, 2, 5]); // => [1,7,5]
// Given an array of integers
//define a starting value of 0 to an iterator variable
//define a new variable to an empty array called 'everyOther'
//iterate through all indices of the array
//if the value of the iterator variable is even
//add the current index of the array to the empty array
//increment the iterator value + 1
//return the everyOther array when looping is finished

// a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.
// define occurrence variable with no value
// define a function that takes two arguments (array, target)
// loop through the array
// set occurrence variable to 0
// if the current index value is equal to the target value
//increment the occurrence variable to + 1
// if the value of the occurrence variable is equal to 3
//return the current index of the array
//else, increment the loop and repeat process
// outside loop,
// if occurrence variable is < 3
// return null

// a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:
// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
// define a function named merge that takes in two arguments (arr1, arr2)
// define new arr named mergedArr to empty array
// declare iterative variable
// loop through the first array
// assign the index of the current iteration to mergedArr
// nest a loop to iterate through second array
// assign the index of the current iteration to mergedArr
// increment iterative variable before returning to outer loop
