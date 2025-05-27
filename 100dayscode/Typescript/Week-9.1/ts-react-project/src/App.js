"use strict";
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }
    // Implement the abstract method
    calculateArea() {
        return this.width * this.height;
    }
}
// Another subclass implementing the abstract class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = "Circle";
    }
    // Implement the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
