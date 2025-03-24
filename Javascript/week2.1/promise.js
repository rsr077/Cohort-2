// Approach #1
// (Wrapping another async fn) 

function myOwn(fn,duration) {
   setTimeout(fn, duration)
}

myOwn(function() {
  console.log("hi there")
},1000)

// This approach uses a callback you have created where other people can send a callback This is good,but could lead to callback hell


// What if I tell you - Create a function that logs something after 1s And then waits for 2 seconds to lof another thing .

/* function myOwns (fn, duration) {
  setTimeout(fn, duration);
}

 myOwn(function() {
   console.log("log the first thing");
   myOwn(function() {
    console.log("log the second thing")
   },2000)
  }, 1000) */


 /*   setTimeout(function() {
     setTimeout(function() {
      console.log("inside the second one")
     },2000)
   },1000) */


   // Approach #1
   // (Warapping another async fn)

  /*  function myOwn(fn, duration){
     setTimeout(fn, duration) ;
   }

    myOwn(function() {
      console.log("hi there")
    },1000) */

    // Approach #2 
     
    // (Using promises)

   /*  function myOwn(duration) {
       let p = new Promise(function(reslove){
        setTimeout(reslove,1000);
       });
       return p;
    }

     myOwn(1000).then(function() {
      console.log("log the first thing");
     }); */


     //  Approach #1

/*      function myOwn(fn, duration) {  
      setTimeout(fn, duration)
     }
   
   myOwn(()=> {
    console.log("hellow world")
   },1000) */


     // Approach #2
/* 
      function myOwn() {
         let p = new Promise(function(reslove) {
           setTimeout(reslove,5000)
         })
         return p;
      }

        myOwn().then(function () {
          console.log("HELLO")
        })
 *//* 
        function myOwn(fn, duration) {  
          setTimeout(fn, duration)
         }
       
       myOwn(()=> {
        console.log("hellow world")
       },1000) 
     */


    /*    function myOwn(callback,duration) {
         setTimeout(function() {
            callback();
         })
       }

        myOwn(function() {

        },duration); */

        // promise 

        function myOwn(duration) {
           const p = new Promise(function(reslove) {
             setTimeout(function() {
              reslove();
             },duration)
           })
           return p;
        }

    const ans = myOwn(1000);
    ans.then(function() {
      console.log("hi everyone ")
    })