/**
 * This JavaScript function, filterObjects, takes an array of objects, an attribute to filter on, and the desired value for that attribute. 
 * It utilizes the Array.filter() method to create a new array containing only the objects that match the specified condition.
 */

function filterObjects(array, attribute, value) {
  // Use the Array.filter() method to create a new array with objects that meet the condition
  return array.filter(obj => obj[attribute] === value);
}


const people = [
  { name: 'Alice', age: 28, country: 'USA' },
  { name: 'Bob', age: 35, country: 'Canada' },
  { name: 'Fatih', age: 29, country: 'Turkey' },
  { name: 'Sally', age: 28, country: 'UK' },
  { name: 'Jack', age: 34, country: 'France' },
  { name: 'Alex', age: 27, country: 'Germany' },
];

// Filter based on age
const filteredByAge = filterObjects(people, 'age', 29);
console.log('Filtered by Age:', filteredByAge);

// Filter based on country
const filteredByCountry = filterObjects(people, 'country', 'Canada');
console.log('Filtered by Country:', filteredByCountry);
