function reverseString(str) {

    const reverseString = str.split("").reverse().join('');

    return reverseString;
}


console.log(reverseString("Hello"));