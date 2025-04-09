const express = require('express')

 function calculatinSum(a,b) {
  return a + b;
 }

 const app = express();

 app.get('/',function(req,res){
   const a = req.query.a;
   const b = req.query.b;
    let ans = calculatinSum(a,b);
    res.send(ans);


 })

app.listen(3000);