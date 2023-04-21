const toRad = require("../helpers/toRad.js");

describe("toRad function", () => {
  test("converts 0 degrees to 0 radians", () => {
    expect(toRad(0)).toBe(0);
  });

  test("converts positive angles to radians", () => {
    expect(toRad(45)).toBeCloseTo(Math.PI / 4);
    expect(toRad(90)).toBeCloseTo(Math.PI / 2);
    expect(toRad(180)).toBeCloseTo(Math.PI);
    expect(toRad(360)).toBeCloseTo(2 * Math.PI);
  });

  test("converts negative angles to radians", () => {
    expect(toRad(-45)).toBeCloseTo(-Math.PI / 4);
    expect(toRad(-90)).toBeCloseTo(-Math.PI / 2);
    expect(toRad(-180)).toBeCloseTo(-Math.PI);
    expect(toRad(-360)).toBeCloseTo(-2 * Math.PI);
  });

  test("converts angles over one full rotation to radians", () => {
    expect(toRad(720)).toBeCloseTo(4 * Math.PI);
    expect(toRad(-720)).toBeCloseTo(-4 * Math.PI);
  });
});
