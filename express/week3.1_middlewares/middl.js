
const express = require("express")
const app = express();

function userMiddlware(req,res,next) {
    if(username != "rajeev" || password != "pass") {
      res.status(403).json({
        msg:"Wrong input"
      })
    }else {
      next();
    }
};

  function kidneyMiddleware(req,res,next) {
     if(kidneyId != 1 && kidneyId != 2){
      res.status(403).json({
         msg:"Wrong input"
      })

     }else{
      next();
     }
  }

  app.get("/health-checkup", userMiddlware, kidneyMiddleware, function(req,res) {
    res.send("Your heart is healthy")
  })


  app.get("/health-checkup", userMiddlware,  function(req,res) {
    res.send("Your heart is healthy")
  })

   app.listen(3000)