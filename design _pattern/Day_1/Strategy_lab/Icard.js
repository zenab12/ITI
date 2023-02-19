class Icard {
  payment() {}
}

class debit extends Icard {
  constructor(salary) {
    super();
    this.salary = salary;
  }

  payment() {
    console.log("use depit card to pay :", this.salary, "$");
  }
}

class credit extends Icard {
  constructor(salary) {
    super();
    this.salary = salary;
  }

  payment() {
    console.log("use credit card to pay :", this.salary, "$");
  }
}
