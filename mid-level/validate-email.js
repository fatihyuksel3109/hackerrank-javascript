// This function validates whether a given string is a valid email address.
// It returns true if the email is valid and false otherwise.

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sample Cases
const email1 = "user@example.com";
const email2 = "invalid-email";
console.log(isValidEmail(email1)); // Output: true
console.log(isValidEmail(email2)); // Output: false