"use strict";
class Shape {
    describe() {
        console.log(`This is a ${this.name} with area ${this.calculateArea()}`);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = "Circle";
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// Test the classes
const r = new Rectangle(5, 10);
r.describe(); // This is a Rectangle with area 50
const c = new Circle(3);
c.describe(); // This is a Circle with area ~28.27
