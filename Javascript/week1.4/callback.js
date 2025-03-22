/*  
 function square(n) {
  return n * n;
 }

 function sum(a, b) {

   return square(a) + square(b)
 }

 console.log(sum(1,2))
 console.log(sum(2,2))
 */


/*  function square(n) {
  return n * n;
 }

 function cube (n) {
  return n * n * n;
 }

  function squares(a, b) {
    const var1 = square(a);
    const var2 = square(b)

    return var1 + var2;
  }

  console.log(squares(1,2))
   

  function cubes(a, b) {
    const var1 = cube(a);
    const var2 = cube(b)

    return var1 + var2;
  }

  console.log(cubes(1,2))
    */



  
/*  function cube (n) {
  return n * n * n;
 }



  function cubes(a) {
    const var1 = cube(a);

    return var1 
  }

  console.log(cubes(2)) */


   function square(a){
    return a * a 
   }

   function cube(a) {
    return a * a * a;
   }

    /* function sum(a,b,callback) {
    console.log (callback)
/*     const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2 ; */

   /*   return callback(a) + callback(b)
    }

    console.log(sum(1,2,square))
    console.log(sum(1,2,cube)); */


    function square(n) {
      return n * n;
    }

    function cube(n) {
      return n * n * n;
    }

    function answer(a,callback){
      return callback(a);
    }
    console.log(answer(2,square))
    console.log(answer(2,cube))