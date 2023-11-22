function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const result = fibonacci(9); // Replace 7 with the desired value of n
console.log(result);
