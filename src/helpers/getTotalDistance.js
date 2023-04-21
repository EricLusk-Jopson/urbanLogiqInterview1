const getDistance = require("./getDistance.js");

function getTotalDistance(cities) {
  let distance = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    distance += getDistance(cities[i], cities[i + 1]);
  }
  return distance;
}

module.exports = getTotalDistance;
