
const express = require("express")
const app= express();

function isOldEnoughMiddleware(req,res,next) {
   const age = req.query.age;
   if(age >= 14){
   next();
   }else {
    res.status(403).json({
    msg: "Your not elgible"
    })
  }
   }

    app.get("/ride1",isOldEnoughMiddleware,function (req,res){
        res.json({
          msg: "You're elgible"
        })
    })
      app.listen(3000)