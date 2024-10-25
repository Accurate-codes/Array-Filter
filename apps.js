// ### 2. *Array Filter*
// Write a function filterArray that takes two arguments: an array of numbers and a callback function. The function should return a new array containing only the elements for which the callback returns true.

// Example:
// javascript
// function isEven(num) {
//   return num % 2 === 0;
// }

// filterArray([1, 2, 3, 4, 5], isEven); // [2, 4]


// ---


// function filterArray(number, callback) {
//     const callback = [];
//     const number =[1, 2, 3, 4, 5, 6, 7, 8, ,9];
//     for (let i = 0; i < number.length; i++) {
//         if (callback(number[i])) {
//             callback.push(number[i]);
//         }
//         const evennumbers = filterArray(number, num => number % 2 === 0)
//     }
//     return evennumbers;
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = filterArray(numbers, num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]


function filterArray(num, callback) {
    const callback = [];
    const number =[1, 2, 3, 4, 5, 6, 7, 8, ,9];
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i])) {
            callback.push(num[i]);
        }
    }
    return callback;
}