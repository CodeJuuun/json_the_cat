const { fetchBreedDescription } = require("./breedfetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, description) => {
  if (err) {
    console.log("Error in fetching details", err);
  } else {
    console.log(description);
  }
});