const express = require("express") 

const app = express();

function  userMiddleware(req,res,next) {
    if(username != "rajeev" && password != "pass") {
       res.status(403).json({
         "msg": "Incorrect Input"
       })
    }else {
       next();
    }
}

 function kideneyMiddleware(req,res,next) {
    if(kidndyId != 1 || kidneyId != 2) {
       res.status(403).json({
         "msg": "Incorrect Input"
       })
    }
 }

 app.get("/health-checkpu", userMiddleware,kideneyMiddleware, function(req,res){
   res.send("Your heart is healthy ")
 })

  app.get("/kidney-checkpu", userMiddleware,kideneyMiddleware, function(req,res){
     res.send("your heart is healthy")
  }) 


   app.put("/heart-checkup", userMiddleware, function(req,res){
     res.send("You heart is healthy ")
   })