const express = require('express');
const app = express();

 app.get("/health-chekup",function(req,res){
   const name = req.headers.name;
   const password = req.headers.password;
   const kidneyId = req.query.kidneyId;

   if(name != "rajeev" ||  password != "pass"){
    res.status(403).json({
      "msg": "you give wrong input"
    })
   }

   if(kidneyId != 1 &&  kidneyId != 2){
    res.status(403).json({
      "msg": "you give wrong input"
    })
   }

   res.json({
     "msg": "You're correct"
   })
 })

app.listen(3001)