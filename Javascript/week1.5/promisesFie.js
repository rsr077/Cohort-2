

// ugly way 

/*   const fs = require('fs')

  function readFiles(cb) {
     fs.readFile("a.txt","utf-8", function(err,data) {
       cb(data);
     })
  }

  function all(data) {
    console.log(data);
  }

readFiles(all);

 */


// pretty code 

  const fs = require('fs')

   function readFiles() {
    return new Promise(function(reslove) {
      fs.readFile("a.txt","utf-8",function(err,data){
        reslove(data);
      })
    })
   }

   function all(data) {
    console.log(data);
   }

   readFiles().then(all);







/* 
const fs = require('fs')

function readFiles() {
  return new Promise(function(reslove){
    fs.readFile("a.txt","utf-8",function(err,data){
      reslove(data);
    })
  })
}

 function all(date) {
  console.log(date)
 }

readFiles().then(all) */