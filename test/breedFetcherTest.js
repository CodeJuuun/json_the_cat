const { fetchBreedDescription } = require("../breedfetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns error when a non-existent breed is passed in", (done) => {
    fetchBreedDescription("non-existentBreed", (err, desc) => {
      // this code will run when the conditions are right
      assert.notEqual(err, null);
      
      assert.equal(desc, null);

      done();
    });
  });
});