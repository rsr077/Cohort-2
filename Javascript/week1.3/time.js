
/* const currenDate = new Date();

console.log("Time in millisecond since 1970:", currenDate.getTime()) */

/* function calculatSum () {
   let a = 0;
   for(let i =0; i<1000000; i++) {
     a = a + i;
    
   }
   return a;
}

  const beforeDate  = new Date();
  const beforeTimeInMs  = beforeDate.getTime();

  calculatSum();

  const afterDate  = new Date();
  const afterTimeInMs  = afterDate.getTime();

  console.log(afterTimeInMs  - beforeTimeInMs) */



   function currentTimePrint() {
     console.log(new Date().getTime());
   }

   setInterval(currentTimePrint, 1000);