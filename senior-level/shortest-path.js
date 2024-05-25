/*
    Traveling Salesman Problem (TSP):
    Implement an efficient algorithm to solve the Traveling Salesman Problem. Given a list of cities and the distances between each pair of cities, find the shortest possible route that visits each city  exactly once and returns to the starting city. 
*/

function nearestNeighborTSP(distanceMatrix) {
  const numCities = distanceMatrix.length;

  // Initialize variables
  const visited = new Array(numCities).fill(false);
  const path = [];
  let totalDistance = 0;

  // Start from the first city
  let currentCity = 0;
  visited[currentCity] = true;
  path.push(currentCity);

  for (let i = 1; i < numCities; i++) {
    let minDistance = Number.MAX_VALUE;
    let nearestCity;

    // Find the nearest unvisited city
    for (let j = 0; j < numCities; j++) {
      if (!visited[j] && distanceMatrix[currentCity][j] < minDistance) {
        minDistance = distanceMatrix[currentCity][j];
        nearestCity = j;
      }
    }

    // Move to the nearest city
    visited[nearestCity] = true;
    path.push(nearestCity);
    totalDistance += minDistance;
    currentCity = nearestCity;
  }

  // Return to the starting city
  path.push(path[0]);
  totalDistance += distanceMatrix[currentCity][path[0]];

  return { path, totalDistance };
}

// Example usage:
const distanceMatrix = [
  [0, 2, 9, 10],
  [1, 0, 6, 4],
  [15, 7, 0, 8],
  [6, 3, 12, 0],
];

const result = nearestNeighborTSP(distanceMatrix);
console.log("Shortest Path:", result.path);
console.log("Total Distance:", result.totalDistance);
