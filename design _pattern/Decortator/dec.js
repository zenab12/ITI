//what is design pattern

/*

Design patterns are typical solutions to commonly occurring problems in software design.
They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

*/

// Define the original shape
class Shape {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.description = "this a shape";
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDescription() {
    return this.description;
  }
}

// Define the decorator abstract class
class ShapeDecorator {
  constructor(shape) {
    this.shape = shape;
  }

  //delegation
  getWidth() {
    return this.shape.getWidth();
  }
  //delegation
  getHeight() {
    return this.shape.getHeight();
  }
}

// Define specific extends as decorators
class borderShape extends ShapeDecorator {
  constructor(shape, w = shape.width, h = shape.height) {
    super(shape);
    this.width = w;
    this.height = h;
    this.description = "this a bordered shape";
  }

  getWidth() {
    return `the old width : ${this.shape.getWidth()} and the new width after modification :  ${
      this.width
    }`;
  }

  getHeight() {
    return `the old height : ${this.shape.getHeight()} and the new width after modification :  ${
      this.height
    }`;
  }

  getDescription() {
    return `${this.shape.getDescription()} and the new shape after modification :  ${
      this.description
    }`;
  }
}
class coloredShape extends ShapeDecorator {
  constructor(shape, w = shape.width, h = shape.height, color) {
    super(shape);
    this.width = w;
    this.height = h;
    this.description = `this a colored shape with ${color} color`;
  }

  getWidth() {
    return `the old width : ${this.shape.getWidth()} and the new width after modification :  ${
      this.width
    }`;
  }

  getHeight() {
    return `the old height : ${this.shape.getHeight()} and the new width after modification :  ${
      this.height
    }`;
  }

  getDescription() {
    return `${this.shape.getDescription()} and the new shape after modification :  ${
      this.description
    }`;
  }
}

// Usage
const Rectangle = new Shape(20, 10);
console.log(Rectangle.getDescription());
console.log(Rectangle.getWidth());
console.log(Rectangle.getHeight());

const square = new borderShape(Rectangle, 30, 40);
console.log(square.getDescription());
console.log(square.getWidth());
console.log(square.getHeight());

const coloredSquare = new coloredShape(Rectangle, 20, 20, "red");
console.log(coloredSquare.getDescription());
console.log(coloredSquare.getWidth());
console.log(coloredSquare.getHeight());

const cmix = new borderShape(new coloredShape(Rectangle, 10, 20, "blue"));
console.log(cmix.getDescription());
