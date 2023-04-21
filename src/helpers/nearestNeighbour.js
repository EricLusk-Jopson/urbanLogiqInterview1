const getDistance = require("./getDistance.js");

function nearestNeighbour(cities) {
  const visited = new Set();
  const path = [cities[0]];
  visited.add(0);
  let currentCity = 0;

  while (visited.size < cities.length) {
    let closestCity;
    let closestDistance = Infinity;
    for (let i = 0; i < cities.length; i++) {
      if (!visited.has(i)) {
        const distance = getDistance(cities[currentCity], cities[i]);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestCity = i;
        }
      }
    }
    path.push(cities[closestCity]);
    visited.add(closestCity);
    currentCity = closestCity;
  }
  path.push(cities[0]);
  return path;
}

module.exports = nearestNeighbour;
