/*
  This JavaScript function calculates the factorial of a given number using recursion.
  The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers
  less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
*/

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage:
const number = 12;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
