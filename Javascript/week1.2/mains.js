function calcluationArthmetic(a, b, arithmeticFinalFunction) {
   const ans = arithmeticFinalFunction(a,b)
   return ans;
}

function sum(a,b){
  return a + b;
}
const value = calcluationArthmetic(1,2,sum)
console.log(value);