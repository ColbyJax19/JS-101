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
