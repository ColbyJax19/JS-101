// Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split('.');
//   if (dotSeparatedWords !== 4) {
//     return false;
//   }

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// let string = 'The Flintstones Rock!';
// for (let i = 0; i <= 10; i++) {
//   console.log(' '.repeat(i) + string);
// }

// function isUpper(str) {
//   return !/[a-z]/.test(str) && /[A-Z]/.test(str);
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

// Alan wrote the following function, which was intended to return all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// // Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(290000000));

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);
// console.log(newAnswer);

// function messWithVars(one, two, three) {
//   one.splice(0, 1, 'two');
//   two.splice(0, 1, 'three');
//   three.splice(0, 1, 'one');
// }

// let one = ['one'];
// let two = ['two'];
// let three = ['three'];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = ['two'];
//   two = ['three'];
//   three = ['one'];
// }

// let one = ['one'];
// let two = ['two'];
// let three = ['three'];

// messWithVars(one, two, three);

// // console.log(`one is: ${one}`);
// // console.log(`two is: ${two}`);
// // console.log(`three is: ${three}`);

// //
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split('.');
//   if (dotSeparatedWords !== 4) {
//     return false;
//   }
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// function isColorValid(color) {
//   if (color === 'blue' || color === 'green') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   let check = color === 'blue' || color === 'green';
//   return check;
// }

function isColorValid(color) {
  return color === 'green' || color === 'blue';
}
console.log(isColorValid('yellow'));
console.log(isColorValid('green'));
console.log(isColorValid('othercolor'));
console.log(isColorValid('blue'));

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
  color = 'black';
}

updateColors(colors);
console.log(color);
console.log(colors);

function updateColors(colors) {
  colors.push(color);
  color = 'black';
}
