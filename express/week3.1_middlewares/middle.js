const express  = require("express")
const app = express()

 app.get("/health-checkpu", function(req,res,next) {
   console.log("hi from reql") 
   next();
 
 }, function (req,res,next) {
       console.log("hi from reql")
       res,
 })

 app.listen(3000)