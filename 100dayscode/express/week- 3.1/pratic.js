const express = require("express");
const app = express();

function userMiddleware(req,res,next) {
   if(username !="rajeev" || password != "pass"){
    res.status(403).json({
       "msg": "Incorrect inputs",
    })
   }else {
    next();
   }
}

 function kidneyMiddleware(req,res,next) {
   if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({
      "msg": "Incorrect input"
    })
   }else {
    next();
   }
 }

 app.get("/health-checkup", userMiddleware,kidneyMiddleware,function(req,res){
  res.send("your heart is healthy")
 });

 app.get("/")