const getDistance = require("../helpers/getDistance");

const mockCity = (lat, lon) => {
  return { name: "city", state: "state", lat: lat, lon: lon };
};

describe("distance function", () => {
  test("returns 0 for the same point", () => {
    expect(getDistance(mockCity(10, 20), mockCity(10, 20))).toBeCloseTo(0);
  });

  test("calculates distance between two points", () => {
    expect(getDistance(mockCity(10, 20), mockCity(20, 30))).toBeCloseTo(
      1544.76,
      1
    );
  });

  test("calculates distance correctly for negative longitude", () => {
    expect(getDistance(mockCity(10, -20), mockCity(20, 30))).toBeCloseTo(
      5463.92,
      1
    );
  });

  test("calculates distance correctly for positive and negative latitude", () => {
    expect(getDistance(mockCity(-10, 20), mockCity(20, 30))).toBeCloseTo(
      3510.85,
      1
    );
  });
});
