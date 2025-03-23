

/* function square(n) {
   return n * n
}

function cube(n) {
  return n * n * n;
}

 function sum(a,b, fn) {
  const vari1 = fn(a)
  const vari2 = fn(b);

  console.log( vari1 + vari2);

 }

 sum(2,3,cube); */

 function greet (name,password, callback) {
  console.log("Hello," + name);
  console.log("Hey where password" + password)
  callback();
 }

 function say() {
  console.log("welcome!");
  
 }

 function say1() {
  console.log("Goodbye!");
 }

 


 greet("rajeev","343534",say,say1)