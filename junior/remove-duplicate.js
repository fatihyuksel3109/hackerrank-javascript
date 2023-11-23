// This is a function to remove duplicate elements from an array.
// It takes an array as input and returns a new array with only unique elements.

function removeDuplicates(arr) {
    // Create an empty object to keep track of unique elements
    const uniqueElements = {};

    // Use the filter method to include only unique elements in the result array
    const result = arr.filter((item) => {
        // If the item is not in the uniqueElements object, add it and return true
        if (!uniqueElements[item]) {
            uniqueElements[item] = true;
            return true;
        }
        // If the item is already in uniqueElements, return false to filter it out
        return false;
    });

    return result;
}

const array1 = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const array2 = ["apple", "orange", "banana", "apple", "grape", "banana"];

console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));
