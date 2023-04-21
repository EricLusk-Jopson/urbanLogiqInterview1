const csv = require("csv-parser");
const fs = require("fs");
const helpers = require("./helpers.js");

const cities = [];

fs.createReadStream("src/cities_all.csv")
  .pipe(csv())
  .on("data", (data) => {
    // Parse each row of data and add it to the array of cities
    const city = [
      data.City,
      data.State,
      parseFloat(data.Latitude),
      parseFloat(data.Longitude),
    ];
    cities.push(city);
  })
  .on("end", () => {
    // Once all the data has been parsed, compute the TSP
    console.log(cities);
    const path = helpers.nearestNeighbour(cities);
    console.log(path);
    console.log(path.at(0), path.at(-1));
    console.log("total distance: ", helpers.getTotalDistance(path));
    const cali = [
      ["San Francisco", "California", 37.7749295, -122.4194155],
      ["South San Francisco", "California", 37.654656, -122.4077498],
      ["San Mateo", "California", 37.5629917, -122.3255254],
      ["San Leandro", "California", 37.7249296, -122.1560768],
      ["San Ramon", "California", 37.7799273, -121.9780153],
      ["Pleasanton", "California", 37.6624312, -121.8746789],
      ["Brentwood", "California", 37.931868, -121.6957863],
    ];
    console.log(cali);
    console.log(
      "cali dist: ",
      helpers.getTotalDistance([
        ["Pleasanton", "California", 37.6624312, -121.8746789],
        ["Brentwood", "California", 37.931868, -121.6957863],
      ])
    );
  });
