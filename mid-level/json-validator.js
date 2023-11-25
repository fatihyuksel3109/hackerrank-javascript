/**
 * JSON Validator
 * 
 * Problem:
 * Given a string, this function checks if it is a valid JSON.
 * 
 */

function isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  // Example usage:
  const validJSONString = '{"name": "John", "age": 30, "city": "New York"}';
  const invalidJSONString = '{name: "John", age: 30, city: "New York"}';
  
  console.log(isValidJSON(validJSONString)); // Output: true
  console.log(isValidJSON(invalidJSONString)); // Output: false
  