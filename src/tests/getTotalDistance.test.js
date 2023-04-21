const getTotalDistance = require("../helpers/getTotalDistance.js");

describe("getTotalDistance function", () => {
  test("calculates the total distance between two cities", () => {
    const cities = [
      { name: "New York", state: "New York", lat: 40.7128, lon: -74.006 },
      {
        name: "Los Angeles",
        state: "California",
        lat: 34.0522,
        lon: -118.2437,
      },
    ];
    expect(getTotalDistance(cities)).toBeCloseTo(3935.75, 2);
  });

  test("calculates the total distance between three cities", () => {
    const cities = [
      { name: "New York", state: "New York", lat: 40.7128, lon: -74.006 },
      {
        name: "Los Angeles",
        state: "California",
        lat: 34.0522,
        lon: -118.2437,
      },
      { name: "Chicago", state: "Illinois", lat: 41.8781, lon: -87.6298 },
    ];
    expect(getTotalDistance(cities)).toBeCloseTo(6739.72, 2);
  });

  test("calculates the total distance between four cities", () => {
    const cities = [
      { name: "New York", state: "New York", lat: 40.7128, lon: -74.006 },
      {
        name: "Los Angeles",
        state: "California",
        lat: 34.0522,
        lon: -118.2437,
      },
      { name: "Chicago", state: "Illinois", lat: 41.8781, lon: -87.6298 },
      { name: "Denver", state: "Colorado", lat: 39.7392, lon: -104.9903 },
    ];
    expect(getTotalDistance(cities)).toBeCloseTo(8217.42, 2);
  });
});
