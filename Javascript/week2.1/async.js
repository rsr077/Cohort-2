
 /* function all() {
  console.log("hi there");
 }

 setTimeout(all, 1000)
 console.log("after setTimeout")

 for(let i = 0; i<100; i++) {
  console.log("hi")
 } */


  const fs = require("fs")

  fs.readFile("a.txt","utf-8", function(err,data) {
    console.log(data);
  });