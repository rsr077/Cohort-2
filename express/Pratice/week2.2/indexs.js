


const express = require("express")

function sum(a,b){
  return a + b;
}

 const app = express();

 app.get("/", function(req,res) {
   const a = req.query.a;
   const b = req.query.b;
   const ans = sum(a,b)
   res.send("sum"+ans);
 })

 app.listen(30001)


















/* const express = require("epxress")

const app = express();

function sum(a,b){
  return a+b
}

app.get("/",function(req,res){
   const value = sum(10,10);
   res.send(value);
})

app.listen(3000) */