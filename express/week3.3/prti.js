 /* const express = require('express')

 const app = express();

 function oldEngouh(age) {
  if(age>14) {
    return true
  }else {
    return false
  }

 }

   app.get("/ride1" ,function(req,res){
      if(oldEngouh(req.query.age)) {
        res.json({
          msg: "you are eligble"
        })
      }else{
        res.status(403).json({
          msg: "You're not eligble"
        })
      }
   })

   app.listen(3000) */

   const express  = require('express')
   const app = express();

   function isOldEnoughMiddleware(req,res,next) {
      const age  = req.query.age;
      if(age >= 14) {
         next();
      }else {
        res.json({
          msg:"sorry you are not eligble "
        })
      }
   }

     app.get("/ride1",isOldEnoughMiddleware, function(req,res){
      res.json({
         msg:"You have successfuly riden the ride 2"
      });
     });

     app.get("/ride2",isOldEnoughMiddleware,function(req,res) {
      res.json({
          msg:"You have successfully riden the ride 1"
      })
     })

     app.listen(3000);
