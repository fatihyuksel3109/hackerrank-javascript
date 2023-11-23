// This function finds two numbers in the array that add up to the target sum.
// It returns an array containing the indices of the two numbers.

function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices[complement] !== undefined) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }

    return [];
}

// Sample Case
const nums = [4, 5, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
