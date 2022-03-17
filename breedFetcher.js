const request = require("request");
const breedName = process.argv[2];
const fetchBreedDescription = (breedName) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, repsonse, body) => {
    if (error) {
      console.log("error:", error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Error: Search could not find that breed`, error);
      return;
    }
    console.log(data[0]["description"]);
  });
};
fetchBreedDescription(breedName);
