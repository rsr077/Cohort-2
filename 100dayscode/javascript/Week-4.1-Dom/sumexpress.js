const express = require("express");

const app = express();

app.get("/",function(req,res){
   const a = parseInt( req.query.a);
   const b = parseInt (req.query.b);
   const sum =  a + b;
   res.send("sum"+ sum.toString())
})

app.listen(3000)