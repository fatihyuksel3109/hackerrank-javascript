function getUniqueElements(arr) {
    const countMap = {};
  
    // Count occurrences of each element
    for (const element of arr) {
      countMap[element] = (countMap[element] || 0) + 1;
    }
  
    // Filter elements with count 1
    const uniqueArray = arr.filter(element => countMap[element] === 1);
  
    return uniqueArray;
  }
  
  // Example usage:
  const example = [1, 2, 2, 3, 4, 5, 3, 7, 9, 10];
  console.log(getUniqueElements(example));
  