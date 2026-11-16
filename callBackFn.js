// Task 6: Welcome Message
// function Welcome(name, callback) {
//   console.log(`Welcome! ${name}`);
//   callback();
// }
// function goodBye() {
//   console.log("GoodBye");
// }
// Welcome("Haris", goodBye);

// ========================================================================

// Task 7: Calculator Using Callback
// function calculate(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }
// function getResult(res) {
//   console.log(`Result : ${res}`);
// }
// calculate(40, 60, getResult);

// ========================================================================

// Task 8: Multiple Operations
// function calculate(a, b, operator, callback) {
//   let result;
//   if (operator === "+") {
//     result = a + b;
//   } else if (operator === "-") {
//     result = a - b;
//   } else if (operator === "*") {
//     result = a * b;
//   } else {
//     return;
//   }
//   callback(result);
// }
// function Addition(res) {
//   console.log(`Addition : ${res}`);
// }
// function Subtraction(res) {
//   console.log(`Subtraction : ${res}`);
// }
// function Multiplication(res) {
//   console.log(`Multiplication : ${res}`);
// }
// calculate(20, 10, "+", Addition);
// calculate(20, 10, "-", Subtraction);
// calculate(20, 10, "*", Multiplication);

// ========================================================================


