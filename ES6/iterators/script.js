/*
Create an iterable object by implementing @@iterator method 
i.e. Symbol.iterator, so that you can use for..of and retrieve its properties. 
retrieving the object properties and its values. 
*/
let i = 0;
let obj = {
  name: "Zien",
  age: 23,
  address: "Mansoura",
  [Symbol.iterator]() {
    return Object.entries(obj)
      .map((k) => {
        return [k][0][1];
      })
      [Symbol.iterator]();

    //        return {
    //       next() {
    //         if (i <= 2) {
    //           this.iterated = true;
    //           // The IteratorResult object has two properties
    //           return {
    //             // whether the iteration is complete, and
    //             done: false,
    //             // the value of the current iteration
    //             value: Object.keys(obj)[i++],
    //           };
    //         }
    //         return {
    //           // When iteration is complete, just the done property is needed
    //           done: true,
    //           value: "undefined",
    //         };
    //       },
    //     };
  },
};

let iter = obj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (val of obj) {
  console.log(val);
}

// third way
function* iterator() {
  let obj = {
    name: "Zien",
    age: 23,
    address: "Mansoura",
  };
  yield* Object.keys(obj);
}

let iterable = iterator();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
