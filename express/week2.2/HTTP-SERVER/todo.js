const express = require("express")
const app = express();
/* 
const todo =[{
  morning:"breakfast",
  afernoon:"lunch",
  night: "dinner"
}] */

app.use(express.json());

app.get("/route-handler", function(req,res){
  
  res.json({
    name:"rajeev",
    age:21
  })
  
})


app.listen(3000)