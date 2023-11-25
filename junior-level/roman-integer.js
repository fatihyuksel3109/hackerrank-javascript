function romanToInteger(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = romanNumerals[roman[i]];
        const nextSymbol = romanNumerals[roman[i + 1]];

        if (nextSymbol > currentSymbol) {
            result += nextSymbol - currentSymbol;
            i++; // Skip the next symbol since it has already been considered.
        } else {
            result += currentSymbol;
        }
    }

    return result;
}

// Example usage:
const romanNumeral = 'VII';
const result = romanToInteger(romanNumeral);
console.log(result); // Output: 9
