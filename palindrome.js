// This is function to determine if a word is palindrome or not.
//It returns "The word ..." is a palindrome if it is true and returns
// "The word ..." is not a palindrome if it is not


function isPalindrome(str) {

    let reverseStr = str.toLowerCase().split('').reverse().join("");

    if (reverseStr === str.toLowerCase()) {
        return `The word ${str} is a palindrome`;
    } else {
        return `The word ${str} is not a palindrome`;
    }

}

console.log(isPalindrome("AKka"));