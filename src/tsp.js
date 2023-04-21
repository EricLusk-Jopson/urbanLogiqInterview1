const csv = require("csv-parser");
const fs = require("fs");
const nearestNeighbour = require("./helpers/nearestNeighbour.js");
const getTotalDistance = require("./helpers/getTotalDistance.js");

const cities = [];

fs.createReadStream("src/cities_all.csv")
  .pipe(csv())
  .on("data", (data) => {
    // Parse each row of data and add it to the array of cities
    const city = {
      name: data.City,
      state: data.State,
      lat: parseFloat(data.Latitude),
      lon: parseFloat(data.Longitude),
    };
    cities.push(city);
  })
  .on("end", () => {
    // Once all the data has been parsed, compute the TSP
    const path = nearestNeighbour(cities);
    console.log(path);
    console.log(`total distance: ${Math.round(getTotalDistance(path))}km`);

    // Create the CSV string
    let csvString = "City,State,Latitude,Longitude\n";
    for (const city of path) {
      csvString +=
        `${city.name}, ${city.state}, ${city.lat}, ${city.lon}` + "\n";
    }
    console.log(csvString);
    // Write the CSV string to a file
    fs.writeFileSync("output.csv", csvString);
  });
