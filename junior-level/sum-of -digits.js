/**
 * Calculate the Sum of Digits in a Number
 *
 * Problem:
 * Given a number, this function calculates the sum of its individual digits.
 *
 * Constraints:
 * - The input should be a non-negative integer.
 *
 * Approach:
 * The algorithm converts the input number to a string to facilitate easy extraction
 * of its individual digits. It then splits the string into an array of characters,
 * and using the `reduce` method, it converts each digit back to a number and calculates
 * the sum of all digits.
 *
 */

function getSumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Example usage:
const exampleNumber = 10874968513524 ;
console.log(getSumOfDigits(exampleNumber));
