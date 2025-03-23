/* 
var d = new Promise(function(resolve){
  setTimeout(function(){
    resolve(1);
  }, 1000);
});


function callback() {
 console.log(d)
}
console.log(d);
d.then(callback); */

/* let p = new Promise(function(reslove){
  reslove("hi there")
})

p.then(function() {
  console.log(p)
}) */



  // simple function

 /*  function asysc(callback) {
    setTimeout(callback,2000);
  }

  asysc(function() {
    console.log("hello!");
  })
 */


  // intimidating async function 

/*  function asysc() {
  let p = new Promise(function(reslove) {
     setTimeout(reslove,2000)
  })
   return p;
 }

  const value = asysc();
  value.then(function() {
     console.log("hi there!")
  }) */


// normal syntax 

  /*  function async() {
    let p = new Promise(function(reslove) {
       // do some async logic here
        reslove("hi there!")
    })
    return p;
   }

   function main() {
     async().then(function(value) {
       console.log(value)
     });
   }

   main();
 */


   // Async/ Await syntax 

   function async() {
    let p = new Promise(function(reslove) {
        // do some async logic here
        reslove("hi there")
    });
    return p;
   }

    async function main() {
       const value = await async();
       console.log(value);
    }

    main();

  