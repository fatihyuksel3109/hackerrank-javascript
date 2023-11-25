/**
 * Shuffle Array
 * 
 */
function shuffleArray(array) {
    const shuffledArray = array.slice(); // Create a shallow copy to avoid modifying the original array
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap elements at indices i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]

    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = shuffleArray(originalArray);
  
  console.log(shuffledArray);
  