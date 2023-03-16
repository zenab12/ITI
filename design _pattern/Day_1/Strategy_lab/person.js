class person {
  constructor(Icard) {
    this._cardBehavior = Icard;
  }

  set wifeBehavior(Icard) {
    this._cardBehavior = Icard;
  }

  payment() {
    this._cardBehavior.payment();
  }

  display() {}
}
