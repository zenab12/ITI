const {
  capitalizeText,
  createArray,
  removePropertyFromObject,
} = require("../index");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.assert;

//1) TEST cases:
//test that the function takes a string it will return a string
//test that the function takes a string and return it after capitalize it
//test if the function takes number it will throw type error says parameter should be string

describe("Testing capitalizeText function", () => {
  //if the function takes a string it will return a string
  it("test that the function takes a string it will return a string", () =>
    assert.equal(typeof capitalizeText("Zien"), "string"));
  //if the function takes a string and return it after capitalize it
  it("test that the function takes a string and return it after capitalize it", () =>
    assert.equal(capitalizeText("sara"), "SARA"));
  //if the function takes number it will throw type error says parameter should be string
  it("test if the function takes number it will throw type error says parameter should be string", () =>
    assert.throws(() => capitalizeText(555), "must be string"));
});

//2) TEST cases:
//test that the return value of type array
//test if we pass 2 it will return array of length 2 and test it includes 1
//test if we pass 3 it will return array of length 3 and test it doesn't include 3
//try to use different styles (expect , should , assert)
describe("Testing createArray function", () => {
  //test that the return value of type array
  it("test the type of value returned from the function createArray", () =>
    assert.equal(Array.isArray(createArray(5)), true));
  //if we pass 2 it will return array of length 2 and test it includes 1
  it("test that the function takes a parameter and return array with length of this param", () =>
    assert.equal(createArray(2).length, 2));
  //if we pass 3 it will return array of length 3 and test it doesn't include 3
  it("test if we pass param it will return array of length of param and test it doesn't include this param", () =>
    assert.notInclude(createArray(3), 3));
});

//3) TEST cases:
// should take property/key and check that's defined in that object
// should retrun type of object
// should retrun the object without the property/key name passing as parameter
// should throw error if the property/key wasn't defined in the passing object
describe("testing remove property from object using removePropertyFromObject function", () => {
  let user;
  beforeEach(() => {
    user = { name: "zien", age: 23 };
  });
  //should take property/key and check that's defined in that object
  it("test property/key is exist and check that's defined in that object", () =>
    assert.deepInclude(removePropertyFromObject(user, "age"), {
      name: "zien",
    }));

  // should retrun type of object
  it("test type of return data from function is object", () =>
    assert.equal(typeof removePropertyFromObject(user, "name"), "object"));
  // should retrun the object without the property/key name passing as parameter (deep equal mean the object is not have the same properities but the right solution is include deeply)
  it("test the retruned object without the property/key name passing as parameter", () =>
    assert.notDeepInclude(removePropertyFromObject(user, "name"), {
      name: "zien",
    }));

  // should throw error if the property/key wasn't defined in the passing object

  it("test if the property/key wasn't defined in the passing object and throwing error", () =>
    assert.throws(
      () => removePropertyFromObject(user, "address"),
      "key does not exist"
    ));
});
