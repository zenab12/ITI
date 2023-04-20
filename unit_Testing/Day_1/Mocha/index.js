// All test cases should pass (fix the functions if needed)

//problem 1
//capitalizeText("hamada") ===> HAMADA
//capitalizeText(12) ===> throw an error

const capitalizeText = (input) => {
  if (!isNaN(input)) {
    throw "must be string";
  }
  return input.toUpperCase();
};

// test cases:
//test that the function takes a string it will return a string
//test that the function takes a string and return it after capitalize it
//test if the function takes number it will throw type error says parameter should be string

//problem 2:
//createArray(3) => [0,1,2]
//createArray(5) => [0,1,2,3,4]
const createArray = (number) => Array.from(Array(number).keys());

// test cases:
//test that the return value of type array
//test if we pass 2 it will return array of length 2 and test it includes 1
//test if we pass 3 it will return array of length 3 and test it doesn't include 3
//try to use different styles (expect , should , assert)

//  bonus:
// problem 3: search for TDD and use it to implement function 'removePropertyFromObject' that should pass these test cases:
// should take property/key and check that's defined in that object
// should retrun type of object
// should retrun the object without the property/key name passing as parameter
// should throw error if the property/key wasn't defined in the passing object

const removePropertyFromObject = (obj, key) => {
  if (!obj[key]) {
    throw "key does not exist";
  }
  delete obj[key];
  return obj;
};

module.exports = { capitalizeText, createArray, removePropertyFromObject };
