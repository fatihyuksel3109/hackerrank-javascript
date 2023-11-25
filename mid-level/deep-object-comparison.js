/**
 * Deep Object Comparison
 * 
 * Problem:
 * Given two objects, this function checks if they are deeply equal.
 * 
 * Constraints:
 * - The objects can contain nested objects and arrays.
 * - The function assumes that the objects do not contain circular references.
 * 
 * Approach:
 * The algorithm recursively compares each property of the two objects. For each property:
 * - If it is a simple data type (number, string, boolean, null, or undefined), it checks for equality.
 * - If it is an object or array, it recursively calls the `deepEqual` function.
 * 
 */

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
      // If the objects are the same reference, they are equal
      return true;
    }
  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      // If either object is not an object or is null, they are not equal
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      // If the objects have different numbers of properties, they are not equal
      return false;
    }
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        // If the keys are not the same or the values are not deeply equal, objects are not equal
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const objA = { name: "John", info: { age: 24, languages: ["French", "German"] } };
  const objB = { name: "John", info: { age: 24, languages: ["French", "German"] } };
  console.log(deepEqual(objA, objB));
  