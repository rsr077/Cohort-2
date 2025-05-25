"use strict";
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} ${this.age}`);
    }
}
const emp = new Employee("Rajeev", 23);
emp.greet("Hi, I'm");
