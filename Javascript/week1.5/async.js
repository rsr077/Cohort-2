
function findSum(n) {
  let ans = 0;

  for(let i = 0; i<= n; i++) {
    ans = ans + i;
  }
  return ans ;
}

 function findSumTill() {
   console.log(findSum(4));
 }

 function syscSleep() {
  let a =  1;
  for(let i = 0; i<1000000; i++){
    a++
  }
 } 
 syscSleep();
 findSumTill();
  console.log("hello world")
  

