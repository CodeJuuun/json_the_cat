const needle = require("needle");

const breedInfo = (breedName) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (err, res) => {
    if (err) {
      console.error("Failed to retrieve data:", err);
      return;
    }

    // console.log(typeof res.body)
    console.log(res.body);
    // check if something exists in the first place
    if (res.body.length > 0) {
      console.log("Description:", res.body[0].description);
    } else {
      console.log("Breed not found");
    }
  });
};



// breedInfo("sib")

const breedName = process.argv[2];
if (!breedName) {
  console.log("Please provide a breed name");
} else {
  breedInfo(breedName);
}