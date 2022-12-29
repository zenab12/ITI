/*

Create a generator that returns fibonacci series that takes only one parameter. Make two different implementations as described below:

a. the parameter passed determines the number of elements displayed from the series. 
b. the parameter passed determines the max number of the displayed series should not exceed its value. 

*/

function* fibonacci(count) {
  let current = 0;
  let next = 1;
  let counter = 0;
  while (!(counter == count)) {
    // seq.next() mean yield current;and we put it inside variable to control reset of iteration with return type of it (undefined or true)
    const reset = yield current;

    [current, next] = [next, next + current];
    counter++;
    // as reset return undefined by default so if we pass true to next() then it mean it will pause iteration to next elem
    if (reset) {
      current = 0;
      next = 1;
      counter = 0;
    }
  }
}

const sequence = fibonacci(6);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

//b. the parameter passed determines the max number of the displayed series should not exceed its value.

function* fibonacci2(maxNum) {
  let current = 0;
  let next = 1;
  while (current <= maxNum) {
    yield current;
    [current, next] = [next, next + current];
  }
}

const sequence2 = fibonacci2(13);
let arr = [];
for (let i = 0; i < 10; i++) {
  console.log(sequence2.next().value);
}
