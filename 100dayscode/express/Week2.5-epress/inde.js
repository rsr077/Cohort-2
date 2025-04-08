const express = require('express')

function sumOfNumber(n) {
  let ans = 0;
  for(let i = 0; i<=n; i++) {
   num = num + i;
  }
  return ans;
}

const app = express();

app.get('/', function(req,res){
  const n = req.query.n;
  const ans = sumOfNumber;
  res.send(ans.toString());
})

app.listen(3000)