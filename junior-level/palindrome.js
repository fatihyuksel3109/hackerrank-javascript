// This is a function to determine if a word is a palindrome or not.
// It takes a string as input and returns a message indicating whether the word is a palindrome or not.
// If the word is a palindrome, it returns "The word ... is a palindrome."
// If the word is not a palindrome, it returns "The word ... is not a palindrome."

function isPalindrome(str) {
    // Convert the input string to lowercase to ensure a case-insensitive comparison
    let reverseStr = str.toLowerCase().split('').reverse().join("");

    // Check if the reversed string is equal to the original string
    if (reverseStr === str.toLowerCase()) {
        return `The word ${str} is a palindrome`;
    } else {
        return `The word ${str} is not a palindrome`;
    }
}

// Test the function with a sample case
console.log(isPalindrome("AKka"));
