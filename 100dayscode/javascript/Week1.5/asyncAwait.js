function asyncFunction() {
   let p = new Promise(function(resolve){
     resolve("hi there")
   })

   return p;
}

 async function main() {
  const value = await asyncFunction();
  console.log(value);
 }

  main();

  function asyncFunction() {
     let p = new Promise(function(resolve){
       resolve("hi there")
     })
     return p;
  }

   async function main(){
     const value = await asyncFunction()
     console.log(value)
   }

   // callback

   function asyncFunction(callback) {
      callback("hi there");
   }
   async function main() {
    
    asyncFunction(function(value){
      console.log(value);
    })
   }
   main();

   // Promise 

   function asyncFunction() {
     let p = new Promise(function(resolve){
       resolve("hi there")
     })
   }
   function main(){
    asyncFunction().then(function(value){
      console.log(value);
    })
   }

   // async 

   function asyncFunction(){
     let p = new Promise(function(resolve)[
       resolve("hi there")
     ])
     return p;
   }

    async function main(){
        const value = await asyncFunction();
        console.log(await);
    }

     main();

    