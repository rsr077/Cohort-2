interface  Greeter {
  (name: string): void;

}

 const sayHello: Greeter = (name) => {
   console.log("Hello" + name)
 }

 sayHello("rajeev")