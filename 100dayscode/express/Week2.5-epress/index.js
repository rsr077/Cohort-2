/* function sumOfNumber(n){
   let ans = 0;
   for(let i = 0; i<=n; i++){
     ans = ans + i;
   }
   return ans;
}


 console.log(sumOfNumber(5))


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
   res.send(ans);
 }) */

 //

 const express  = require('express')

 function calculatinSum(a,b) {
   return a + b;
 }

  const app = express();

   app.get("/", function(req,res){
      const a  = req.query.a;
      const b = req.query.b;

      const ans = calculatinSum(a,b)
      res.send(a,b)
      res.send(ans);
   })

    app.listen(3000);