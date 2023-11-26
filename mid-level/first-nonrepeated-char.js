function firstNonRepeatedCharacter(str) {
    // Create a frequency map to store the count of each character
    const charCount = {};

    // Iterate through the string to populate the frequency map
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null or any suitable value
    return null;
}

// Example usage:
const inputString = "asdasdahhrlmeişişi";
const result = firstNonRepeatedCharacter(inputString);
console.log("First non-repeated character:", result);
