const needle = require("needle");


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (err, res) => {
    if (err) {
      console.error("Failed to retrieve data:", err);
      return callback(`Failed to fetch data: ${err.message}`, null);
    }
    
    if (res.body && res.body.length > 0) {
      return callback(null, res.body[0].description);
    } else {
      return callback("Did not find breed", null);
    }
  });
};
//     // console.log(typeof res.body)
//     console.log(res.body);
//     // check if something exists in the first place
//     if (res.body.length > 0) {
//       console.log("Description:", res.body[0].description);
//     } else {
//       console.log("Breed not found");
//     }
//   });
// }


module.exports = { fetchBreedDescription };