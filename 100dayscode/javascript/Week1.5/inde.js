/* const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log("hi there!")

let a = 0;
 for(let i = 0; i<10000000; i++) {
   a++;
 }

console.log("hi there!2") */

/* 
function hi() {
  console.log("hi")
}
setTimeout(hi, 2000) 

console.log("hii") */




/*  const fs = require('fs');

 function rajeevReadFile(cb) {
   fs.readFile("a.txt", "utf-8", function(err,data) {
     cb(data);
   })
 }

   function onDone(data) {
     console.log(data)
   }

   rajeevReadFile(onDone) */

  /*  const fs = require('fs');
   

  function rajeevFile() {
      return new Promise (function(resolve) {
         fs.readFile("a.txt", "ustf- 8", function(err, data){
          resolve(data);
         })
      })
  }

  function onDone(data) {
     console.log(data)
  } */


     const fs = require('fs') 

     function file(cb) {
        fs.readFile("a.txt","utf-8", function(err,data) {
           cb(data);
        })
     }
      function onDone(data) {
        console.log(data)
      }

      file(onDone);