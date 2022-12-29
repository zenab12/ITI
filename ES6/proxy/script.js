/*
create a dynamic object using Proxy such that it has only the following properties  

a∙ name property that accepts only string of 7 characters. 

b∙ address property that accepts only string value. 

c∙ age property that accepts numerical value between 25 and 60. 

*/

let handler = {
  get(target, prop) {
    let res;
    if (prop) {
      res = `the attr is ${prop} and it's value is ${target[prop]}`;
    } else {
      res = `the attr ${prop} is not allowed`;
    }
    return res;
  },
  set(target, prop, val) {
    let res;
    if (prop == "name") {
      if (typeof val == "string" && val.length == 7) {
        target[prop] = val;
        res = val;
      } else if (typeof val != "string") {
        res = `the attr ${prop} value is not string `;
      } else if (typeof val == "string" && val.length !== 7) {
        res = `the attr ${prop} value length is not equal 7 characters `;
      }
    } else if (prop == "address") {
      if (typeof val == "string") {
        target[prop] = val;
        res = val;
      } else {
        res = `the attr ${prop} value is not string `;
      }
    } else if (prop == "age") {
      if (!isNaN(val) && val >= 25 && val <= 60) {
        target[prop] = val;
        res = val;
      } else if (!isNaN(val) && val < 25) {
        res = `the attr ${prop} value is less than 25 `;
      } else if (!isNaN(val) && val > 60) {
        res = `the attr ${prop} value is greater than 60 `;
      } else {
        res = `the attr ${prop} value is not a number `;
      }
    }

    console.log(res);
    return res;
  },
};

let target = {
  name: "Zienab M",
  address: "Mansoura",
  age: 23,
};

let ourProxy = new Proxy(target, handler);
