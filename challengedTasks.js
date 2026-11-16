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
