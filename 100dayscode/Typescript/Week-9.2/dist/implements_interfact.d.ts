declare class Employee implements Person {
    name: string;
    age: number;
    constructor(n: string, a: number);
    greet(phrase: string): void;
}
declare const emp: Employee;
