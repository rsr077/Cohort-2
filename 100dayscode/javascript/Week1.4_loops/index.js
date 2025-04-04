/* function findSum(n) {
 
   for(let i = 0; i<= n; i++)

      return i;
}

console.log(findSum(12)); */

/* function findSum(n) {
    let ans = 0;
    for(let i = 0; i<= n; i++){
       ans = ans + i;
    }
    return ans
}

console.log (findSum(12));
console.log (findSum(14)); */

/* let ans = 0;
for(let i = 0; i<= 100; i++){
   ans = ans + i;
}

 console.log(ans);

 let ans2 = 0;
for(let i = 0; i<= 10; i++){
   ans2 = ans2 + i;
}

 console.log(ans2); */
/* 
 function findSum(){
   let num = 1;
   let num2 = 2;
}
function sum() {
    let sum = num + num2
    console.log(sum)

 }

 findSum(); */

 function square(n) {
    return n * n
 }

 function sumOfSquares(a, b ) {
     const val1 = square(a)
     const val2 = square(b);

     return val1 + val2 ;
 }
  console.log(sum(sumOfSquares(1,2)));