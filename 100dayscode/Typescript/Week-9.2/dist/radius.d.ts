declare abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
    describe(): void;
}
declare class Rectangle extends Shape {
    width: number;
    height: number;
    name: string;
    constructor(width: number, height: number);
    calculateArea(): number;
}
declare class Circle extends Shape {
    radius: number;
    name: string;
    constructor(radius: number);
    calculateArea(): number;
}
declare const r: Rectangle;
declare const c: Circle;
