const express = require("express")

const app = express();

 function useMiddlware(req,res,next) {
  const age = req.query.age
  if(age >= 14){
    next();
  }else {
    res.json({
      msg:"You're wrong input"
    })
  }
 }

 app.get("/ride1",useMiddlware,function(req,res){
    res.json({
      msg: "You're eligbile for ride"
    })
 })


 app.get("/ride2",useMiddlware,function(req,res){
  res.json({
    msg: "You're eligbile for ride"
  })
})

app.use(useMiddlware);

 app.listen(3000)