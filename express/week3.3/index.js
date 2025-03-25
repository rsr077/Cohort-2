
const express = require("express")

const app = express();

// function that returns a boolean if the age of the preson is more than 14 
/* 
function isOldEnough(age) {
   if(age >= 14 && age<= 40) {
    return true
   }else{
    return false
   }
}
 

app.get("/ride2",function(req,res) {

  if(isOldEnough(req.query.ages)) {
    res.json({
   meg:"You have successfuly ride the ride 1 " 
    })
  }  else {
    res.status(403).json({
       msg:"sorry you are not of age yet "
    })
  }
})


app.get("/ride1",function(req,res) {

  if(isOldEnough(req.query.ages)) {
    res.json({
   meg:"You have successfuly ride the ride 1 " 
    })
  }  else {
    res.status(403).json({
       msg:"sorry you are not of age yet "
    })
  }

}) 
 */


/* app.get("/ride1",isOldEnough,function(req,res){
  if(isOldEnough(req.query.age)) {
    res.json({
      msg:"You're eligible "
    })
  }else {
    res.status(403).json({
      msg: "you're not eligible "
    })
  }
}) */
// middleware 

  function isOldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if(age  >= 14) {
      next();
    }else {
     res.json({
       msg:"Sorry you are not of age yet."
     })
    }
 }
 app.use(isOldEnoughMiddleware)
 
 app.get("/ride1",  function(req,res) {
   res.json({
     msg: "you have successfully ride the ride 2"
   });
 });

   app.get("/ride2", function(req,res){
    res.json({
       msg:"You have sucussfully rdie the ride 1"
    })
   })

app.listen(3000)