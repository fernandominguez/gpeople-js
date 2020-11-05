const chai = require("chai");
const expect = chai.expect;
const gPeople = require("../gpeople.js");

describe("test batchGet()", () => {
  it("should return a valid JSON object", () => {
    var json = {
      "responses": [{
        object(ContactGroupResponse)
      }]
    };
    expect(gPeople.batchGet()).to.be.an.instanceof(json);
  })
});