"use strict";

class IMediator {
  constructor() {}
  Send(message, fromColleague, toColleague) {}
}

class ConcreteMediator extends IMediator {
  constructor() {
    super();
    this._colleague1 = new ConcreteColleague1(this);
    this._colleague2 = new ConcreteColleague2(this);
    this._colleague3 = new ConcreteColleague3(this);
    this._colleague4 = new ConcreteColleague4(this);
    this._colleague5 = new ConcreteColleague5(this);
  }

  set Colleague1(colleague1) {
    this._colleague1 = colleague1;
  }

  set Colleague2(colleague2) {
    this._colleague2 = colleague2;
  }

  set Colleague3(colleague3) {
    this._colleague3 = colleague3;
  }

  set Colleague4(colleague4) {
    this._colleague4 = colleague4;
  }
  set Colleague5(colleague5) {
    this._colleague5 = colleague5;
  }

  Send(message, fromColleague) {
    if (fromColleague == this._colleague1) {
      this._colleague1.Notify(message);
    } else if (fromColleague == this._colleague2) {
      this._colleague2.Notify(message);
    } else if (fromColleague == this._colleague3) {
      this._colleague3.Notify(message);
    } else if (fromColleague == this._colleague4) {
      this._colleague4.Notify(message);
    } else {
      this._colleague5.Notify(message);
    }
  }
}

class Colleague {
  constructor(mediator) {
    this._mediator = mediator;
  }

  Notify(message) {}
}

class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }

  Send(message) {
    this._mediator.Send(message, this);
  }

  Notify(message) {
    console.log(" from Peter to Samy : " + message);
    console.log(" from Peter to Pola : " + message);
    console.log(" from Peter to Fady : " + message);
    console.log(" from Peter to Sara : " + message);
  }
}

class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }

  Send(message) {
    this._mediator.Send(message, this);
  }

  Notify(message) {
    console.log("from Sara to Peter: " + message);
    console.log("from Sara to Samy: " + message);
    console.log("from Sara to Pola: " + message);
    console.log("from Sara to Fady: " + message);
  }
}

class ConcreteColleague3 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }

  Send(message) {
    this._mediator.Send(message, this);
  }

  Notify(message) {
    console.log("from Fady to Sara: " + message);
  }
}
class ConcreteColleague4 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }

  Send(message) {
    this._mediator.Send(message, this);
  }

  Notify(message) {
    console.log("from Samy to Peter: " + message);
    console.log("from Samy to Pola: " + message);
    console.log("from Samy to Fady: " + message);
    console.log("from Samy to Sara: " + message);
  }
}
class ConcreteColleague5 extends Colleague {
  constructor(mediator) {
    super(mediator);
    console.log("ConcreteColleague2 created");
  }

  Send(message) {
    this._mediator.Send(message, this);
  }

  Notify(message) {
    console.log("from Pola to Samy: " + message);
  }
}

function init_Mediator() {
  var mediator = new ConcreteMediator();

  var c1 = new ConcreteColleague1(mediator);
  var c2 = new ConcreteColleague2(mediator);
  var c3 = new ConcreteColleague3(mediator);
  var c4 = new ConcreteColleague4(mediator);
  var c5 = new ConcreteColleague5(mediator);

  mediator.Colleague1 = c1;
  mediator.Colleague2 = c2;
  mediator.Colleague3 = c3;
  mediator.Colleague4 = c4;
  mediator.Colleague5 = c5;

  c1.Send("All you need is love");
  c2.Send("I love you john");
  c3.Send("Hey , no nedd to broadcast");
  c4.Send("Ha,I heard that");
  c5.Send("Paul, what do you think");
}
