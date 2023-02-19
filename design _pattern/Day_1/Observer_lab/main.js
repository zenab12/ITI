"use strict";

class IemailManager {
  constructor() {
    this.observers = [];
  }

  Attach(Observer) {
    this.observers.push(Observer);
  }

  Dettach(Observer) {
    for (var i in this.observers)
      if (this.observers[i] === Observer) this.observers.splice(i, 1);
  }

  Notify() {
    for (var i in this.observers) {
      console.log("customer wants to notify");
      this.observers[i].Update(this);
    }
  }
}

class emailManager extends IemailManager {
  constructor() {
    super();
    this.subjectState = null;
  }

  GetEmailState() {
    return this.subjectState;
  }

  UpdateEmailState() {
    let state = this.message();
    this.subjectState = state;
    this.Notify();
  }

  message() {
    return "new mail with iphone 12";
  }
}

// subscriber - Observer - interface
class ICustomer {
  constructor() {}

  Update(Subject) {}
}

// subscriber 1
class customer_1 extends ICustomer {
  constructor() {
    super();
    this.observerState = "";
    console.log("Customer created Ali");
  }

  Update(Subject) {
    this.observerState = Subject.GetEmailState();
    console.log("Ali " + this.observerState);
  }
}

// subscriber 2
class customer_2 extends ICustomer {
  constructor() {
    super();
    this.observerState = "";
    console.log("Customer created Ahmed");
  }

  Update(Subject) {
    this.observerState = Subject.GetEmailState();
    console.log("Ahmed " + this.observerState);
  }
}

function init_Observer() {
  var customer1 = new customer_1();
  var customer2 = new customer_2();
  var email = new emailManager();
  email.Attach(customer1);
  email.Attach(customer2);
  email.UpdateEmailState();
}
