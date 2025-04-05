function findSum(n) {
    let ans = 0;
    for(let i = 0; i<n; i++) {
       ans = ans + i;
    }
     return ans 
}

 function findSumTill() {
    console.log(findSum(100))
 }

  setTimeout(findSumTill, 2000) 
  console.log("hellow world")