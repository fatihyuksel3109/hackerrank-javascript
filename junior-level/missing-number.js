/**
 * Find the Missing Number in an Array
 * 
 * Problem:
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 * 
 * Constraints:
 * - The input array is expected to contain distinct numbers.
 * - The missing number is the one that should be present in the original sequence but is not in the array.
 * 
 * Approach:
 * The algorithm utilizes the concept of the sum of natural numbers. The expected sum of numbers from 0 to n
 * is calculated using the formula (n * (n - 1)) / 2. The actual sum of the elements in the array is then
 * computed using the reduce method. The missing number is obtained by subtracting the actual sum from the expected sum.
 
 */

function getMissingNumber(arr) {
    const n = arr.length + 1;
  
    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n - 1)) / 2;
  
    // Calculate the actual sum of elements in the array
    const actualSum = arr.reduce((a, b) => a + b, 0);
  
    // Find the missing number by subtracting the actual sum from the expected sum
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  const example = [0, 1, 2, 3, 4, 5, 7, 8, 9];
  console.log(getMissingNumber(example));
  