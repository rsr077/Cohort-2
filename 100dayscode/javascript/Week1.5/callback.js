 function asyncFunction(callback) {
   callback("hi there")
}
 
/* function hi(callback) {
   console.log(callback);
}
 */

 async function main() {
   asyncFunction(function(value) {
    console.log(value)
   })
 }

    main(); 


 function asyncFunction (callback) {
    callback("heelow ")
 }

 async function() {
   asyncFunction(function(value){
       console.log(value)
   })
 }
  main();