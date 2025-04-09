const express = require('express')

const app = express();

function calculatinSum(n){
   let ans = 0 ;
   for(let i = 0; i<=n; i++) {
     ans = ans + i;

   }
   return ans
}

 app.get("/",function(req,res){
    let n = req.query.n;
     let sum = (calculatinSum(n))
      res.send("number"+ sum)
 })

   app.listen(3000)