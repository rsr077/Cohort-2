

/* const fs = require("fs")

fs.readFile("a.txt","utf-8",function(err,dat){
  console.log(dat);
}) */



   const fs = require('fs');

   function ReadFile(cb) {
    fs.readFile("a.txt","utf-8",function(err,dat){
     cb(dat);
    });
   }

   function onDone(dat) {
    console.log(dat)
   }

   ReadFile(onDone);