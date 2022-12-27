export class Shape {
  constructor(d1, d2) {
    this.dim1 = d1;
    this.dim2 = d2;
  }
  area() {
    return this.dim1 * this.dim2;
  }

  premiter() {
    return (this.dim1 + this.dim2) * 2;
  }
  toString() {
    return `this is parent shape class`;
  }
}
