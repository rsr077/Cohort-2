const express = require("express")

const app = express();

function isEnough(age){
  if(age >= 14){
    return true;
  }else {
    return false;
  }
}


app.get("/ride1",function(req,res){
  if(isEnough(req.query.age)){
    res.json({
      msg: "You're are eligble for ride1"
    })
  }else{
    res.status(411).json({
      msg: "Soory you're not eligble for ride1"
    })
  }
})

app.get("/ride2",function(req,res){
  if(isEnough(req.query.age)){
    res.json({
      msg: "You're are eligble for ride1"
    })
  }else{
    res.status(411).json({
      msg: "Soory you're not eligble for ride1"
    })
  }
})

app.listen(3000)