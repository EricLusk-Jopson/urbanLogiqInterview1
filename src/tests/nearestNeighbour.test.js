const nearestNeighbour = require("../helpers/nearestNeighbour.js");
const getDistance = require("../helpers/getDistance.js");
const getTotalDistance = require("../helpers/getTotalDistance.js");

describe("nearestNeighbour", () => {
  const cities = [
    {
      name: "San Francisco",
      state: "California",
      lat: 37.7749,
      lon: -122.4194,
    },
    { name: "Los Angeles", state: "California", lat: 34.0522, lon: -118.2437 },
    { name: "Seattle", state: "Washington", lat: 47.6062, lon: -122.3321 },
    { name: "Las Vegas", state: "Nevada", lat: 36.1699, lon: -115.1398 },
    { name: "Denver", state: "Colorado", lat: 39.7392, lon: -104.9903 },
  ];

  test("returns a valid path with all cities visited", () => {
    const path = nearestNeighbour(cities);
    expect(path.length).toBe(cities.length + 1);
    const visited = new Set(path.map((city) => city.name));
    expect(visited.size).toBe(cities.length);
  });

  test("path begins where it ends", () => {
    const path = nearestNeighbour(cities);
    expect(path.at(-1)[0]).toBe(path.at(0)[0]);
  });

  test("path begins with first city in input array", () => {
    const path = nearestNeighbour(cities);
    expect(path[0]).toBe(cities[0]);
  });

  test("returns a path with the correct total distance", () => {
    const path = nearestNeighbour(cities);
    let totalDistance = getTotalDistance(path);
    expect(totalDistance).toBeGreaterThan(0);
  });
});
