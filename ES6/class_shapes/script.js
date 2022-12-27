/*
Write a script to create different shapes (rectangle, square, circle)
make all of them inherits from shape class.
a.each shape containstwo functions to calculate its area and its parameter.
b.Display the area and each object parameter in your console by overriding toString().
c.Make yourclasses in an external file and import them in a module to create objects.

*/
import * as shapes from "./shapes.js";

let square = new shapes.Square(10);
console.log(square.toString());
console.log(square.area());
console.log(square.premiter());

let rect = new shapes.Rectangle(10, 5);
console.log(rect.toString());
console.log(rect.area());
console.log(rect.premiter());

let circle = new shapes.Circle(5);
console.log(circle.toString());
console.log(circle.area());
console.log(circle.premiter());
