import { Account } from "./classes/Parent.model.js";
import { Saving_Account, Current_Account } from "./classes/Childrens.model.js";
let a1 = new Account(12);
console.log(a1.Acc_no);
let a2 = new Saving_Account();
console.log(a2);
let a3 = new Current_Account();
console.log(a3);
