
function hi(callback) {
    setTimeout(callback, 1000)
}

hi(function() {
    console.log("hello")
})

hi();
function hi(callback) {
   let p = new Promise(function(resolve) {
       setTimeout(resolve,1000)
   })
   return;
}

 const value = hi();
 value.then(function() {
    console.log("hi there");
 })