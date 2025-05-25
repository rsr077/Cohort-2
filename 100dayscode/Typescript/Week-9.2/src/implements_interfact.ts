class Employee implements Person {
    name: string;
    age : number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name} ${this.age}`);
    }
}

const emp = new Employee("Rajeev", 23);
emp.greet("Hi, I'm");
