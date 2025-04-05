const { promise } = require("zod");

function asyncFunction() {
   let p = new Promise(function(resolve) {
     resolve("hi there!")
   });

   return p;
}

 function main () {
   asyncFunction().then(function(value) {
     console.log(value)
   })
 }
 main();

 function asyncFunction() {
   let p = new Promise(function(resolve) {
     resolve("hi there")
   })
   return p;
 }

  function main() {
     asyncFunction().then(function(value){
      console.log(value);
     })
  }

  main();