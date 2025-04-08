
console.log("at the top 1");

 function promise(){
  return new Promise(function (resolve){
     setTimeout(function(){
      resolve("done baby ! I am burne ")
  })
  })
 }

 console.log("in the middle 1")
 promise().then(function(value){
   console.log(value);
 })