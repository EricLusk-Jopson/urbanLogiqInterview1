const toRad = require("./toRad.js");

function getDistance(city1, city2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(city2.lat - city1.lat);
  const dLon = toRad(city2.lon - city1.lon);
  const lat1Rad = toRad(city1.lat);
  const lat2Rad = toRad(city2.lat);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

module.exports = getDistance;
