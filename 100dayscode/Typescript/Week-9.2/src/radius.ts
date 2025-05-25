abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;

  describe(): void {
    console.log(`This is a ${this.name} with area ${this.calculateArea()}`);
  }
}

class Rectangle extends Shape {
  name = "Rectangle";

  constructor(public width: number, public height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  name = "Circle";

  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Test the classes
const r = new Rectangle(5, 10);
r.describe(); // This is a Rectangle with area 50

const c = new Circle(3);
c.describe(); // This is a Circle with area ~28.27
