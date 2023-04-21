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
  return path;
}

function getDistance(city1, city2) {
  const [cityName1, state1, lat1, lon1] = city1;
  const [cityName2, state2, lat2, lon2] = city2;
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);
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

function toRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function getTotalDistance(cities) {
  let distance = 0;
  cities.forEach((city, i) => {
    const nextCityIndex = i < cities.length - 1 ? i + 1 : 0;
    distance += getDistance(city, cities[nextCityIndex]);
  });
  return distance;
}

// module.exports = nearestNeighbour;
// module.exports = getTotalDistance;

module.exports = {
  nearestNeighbour: nearestNeighbour,
  getTotalDistance: getTotalDistance,
};
