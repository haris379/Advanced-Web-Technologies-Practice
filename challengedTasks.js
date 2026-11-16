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
