// Task 11: Student Result System
// const checkResult = (stdName, stdMarks, callback) => {
//   let result;
//   if (stdMarks >= 50) {
//     result = `${stdName} Passed`;
//   } else {
//     result = `${stdName} Failed`;
//   }
//   callback(result);
// };

// const printResult = (result) => {
//   console.log(result);
// };
// checkResult("Haris", 60, printResult);

// ========================================================================

// Task 12: Shopping Discount Calculator
// const calculatePrice = (price, callback) => {
//   console.log(`Original Price : ${price}`);
//   let discount = callback(price);
//   console.log(`Discount : ${discount}`);
//   let newPrice = price - discount;
//   console.log(`New Price : ${newPrice}`);
// };
// const discountedPrice = (price) => {
//   return (price * 10) / 100;
// };
// calculatePrice(2000, discountedPrice);

// ========================================================================

// Task 13: Mini Task Manager
// const performTask = (taskName, callback) => {
//   console.log("Starting Task...");
//   callback(taskName);
//   console.log("Task Completed...");
// };
// const taskName = (name) => {
//   console.log(name);
// };
// performTask("Working on JS", taskName);

// ========================================================================

// Task 14 – Calculator with Four Operations
// const calculator = (a, b, callback) => {
//   callback(a, b);
// };
// function addition(a, b) {
//   console.log(`Addition : ${a + b}`);
// }
// function subtraction(a, b) {
//   console.log(`Subtraction : ${a - b}`);
// }
// function multiplication(a, b) {
//   console.log(`Multiplication : ${a * b}`);
// }
// function division(a, b) {
//   console.log(`Division : ${a / b}`);
// }
// calculator(20, 10, addition);
// calculator(20, 10, subtraction);
// calculator(20, 10, multiplication);
// calculator(20, 10, division);

// ========================================================================

// Task 15 – Array Operations
// const numbers = [5, 10, 15, 20, 25, 30];
// const greater = numbers.filter((n) => {
//   return n > 15;
// });
// const newArray = greater.map((n) => {
//   return n * 2;
// });
// console.log(newArray);

// ========================================================================

// Task 16 – Callback with setTimeout
// const processOrder = (orderName, callback) => {
//   console.log("Order recieved");
//   setTimeout(() => {
//     callback(orderName);
//   }, 2000);
// };
// const getOrder = (name) => {
//   console.log(`Processing Order : ${name}`);
// };
// processOrder("Pizza", getOrder);

// ========================================================================

// Task 17 – Find Maximum Number
// const findMax = (numOne, numTwo, numThree) => {
//   if (numOne >= numTwo && numOne >= numThree) {
//     return numOne;
//   } else if (numTwo >= numOne && numTwo >= numThree) {
//     return numTwo;
//   } else {
//     return numThree;
//   }
// };
// console.log(findMax(50, 50, 30));

// ========================================================================

// Task 18 – Custom Callback Filter
// const checkNumbers = (numbers, callback) => {
//   return callback(numbers);
// };
// const checkEven = (numbers) => {
//   return numbers.filter((n) => {
//     return n % 2 === 0;
//   });
// };
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(checkNumbers(numbersArray, checkEven));
