// Using rest parameter and spread operator return max value from any array
// note: array length is not fixed
// return min and max value and display each of them separately after function call

// the parameter is use of rest operator as we need array as arguments collection
// but here using rest operator you will get array of element instead collection

/* Unlike regular functions, the arguments binding does not exist for arrow functions.
However, they have access to the arguments object of a non-arrow parent function.
*/

function Max() {
  return (() => {
    console.log(arguments);
    console.log(...arguments);
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) max = arguments[i];
    }
    return max;
  })();
}

let Min = (...arr) => {
  return Math.min(...arr);
};

let arr = [1, 5, 3, 24, 6, 0, 7];

// the argument passed to Max or Min function is use of spread operator

console.log(`maxNumber is ${Max(...arr)}`); //spread operator
console.log(`minNumber is ${Min(...arr)}`);
