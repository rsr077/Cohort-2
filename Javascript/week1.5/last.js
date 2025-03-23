
// Callback syntax 

/* function async(callback) {
  callback("hi there")
}

 async function main() {
  async(function(value) {
     console.log(value)
  });
 }

 main(); */

  // Promise(then) syntax 

  /* function async() {
    let p = new Promise(function(reslove){
      reslove("hi there!");
    })
    return p;
  }

   function main() {
     async().then(function(value) {
      console.log(value);
     })
   }

   main(); */


   // Async/await syntax 

   function async() {
     let p = new Promise(function(reslove) {
      reslove("hi there!")
     });
     return p;
   }

   async function main() {
     const value = await async();
     console.log(value);
   }

    main();
    
