function findKthLargestElement(arr, k) {
    // Check if k is valid
    if (k <= 0 || k > arr.length) {
        return "Invalid k value";
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Return the kth largest element
    return arr[k - 1];
}

// Example usage:
const inputArray = [13, 15, 40, 51, 345, 239, 42, 56, 25, 32, 55];
const kValue = 21;
const result = findKthLargestElement(inputArray, kValue);
console.log(`The ${kValue}th largest element is: ${result}`);
