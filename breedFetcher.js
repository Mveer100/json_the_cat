const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, repsonse, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, "Error fetch details: that breed was not found");
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
