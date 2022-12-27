import { Shape } from "./shape.js";

export class Rectangle extends Shape {
  constructor(dim1, dim2) {
    super(dim1, dim2);
  }
  toString() {
    return `this is rectangle class`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  premiter() {
    return Math.PI * 2 * this.radius;
  }
  toString() {
    return `this is circle class`;
  }
}

export class Square extends Shape {
  constructor(dim1) {
    super(dim1);
  }

  area() {
    return this.dim1 * this.dim1;
  }

  premiter() {
    return this.dim1 * 4;
  }
  toString() {
    return `this is square class`;
  }
}
