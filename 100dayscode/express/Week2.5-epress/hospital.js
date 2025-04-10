const express = require('express')
const app = express();

 const users = [{
   name: "rajeev",
   kidneys:[{
     healthy:false
   }]
 }]

 app.get("/",function(req,res){
   const jonhkidney = users[0].kidneys;
    console.log(jonhkidney);
 })