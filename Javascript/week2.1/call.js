

  /* function square(n) {
     return n * n;
  }

  function cube(n) {
     return n * n * n;
  }

  function all(a,b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2 ;
  }

  
  function all2(a,b){
    const val1 = cube(a);
    const val2 = cube(b);

    return val1 + val2 ;
  }


   const ans = all(1,2);
   console.log(ans)
   const ans2 = all2(1,2);
   console.log(ans2)
 */

   function square(n) {
    return n * n ;
   }

   function cube(n) {
     return n * n * n;
   }

     function all(a,b,fn) {
        return fn(a) + fn(b);
     }

     console.log(all(1,2,square));
     