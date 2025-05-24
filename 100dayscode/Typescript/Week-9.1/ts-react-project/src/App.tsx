import { string } from "zod";

interface Person {
  name: string,
  age : number
  greet(phrase: string ) : void;
}

class Emloyee  implements Person {
  name: string;
  age: number;
}

constructor (n: string, a: number) {
  this.name = n;
  this.age = a; 

}

  greet(pharse: string) {
    console.log(`${phrase} ${this.name}`);
  }


