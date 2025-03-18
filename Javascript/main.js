function call(a,b,callFunction){
  const ans = callFunction(a,b) 
  return ans;
}

function sum(a,b) {
  return a + b;
}

const value = call(1, 2, sum)
console.log(value)