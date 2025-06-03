export function greets(name, callback) {
  console.log("Hi " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greets("Rajeev", sayBye);
