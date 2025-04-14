const express = require("express")
const app = express();


function userNameValidator() {
   if(username != "rajeev" && password != "pass"){
     return false;
   }
   return true;
    
}
function kidneyvalidator() {
   if(kidenyId  != 1 || kidenyId != 2) {
     return false;
   }
   return true;
}

app.get("/",function(req,res) {
    const kideneyId = req.query.kideneyId;

    if(userNameValidator(req.body.username, req.body.password)) {
       res.status(403).json({
         "msg": "user doesnt exit"
       })
       return ;
    } 

    if(kidneyvalidator(req.body.kideneyId, req.body.kideneyId)) {
       res.status(403).json({
         "msg": "user doesn't exit"
       })
    }
   
})


app.put("/", function(req,res){
   
const username = req.body.username;
const password = req.body.password;
const kidenyId = req.query.kideneyId;

 if(!userNameValidator(req.query.username, req.query.password)) {
   res.status(403).json({
     msg: "User doesn't exit"
   })
   return;
 }

  if(!kidneyvalidator(kidenyId)) {
     res.status(403).json({
       msg: "User doesn't exit"
     })
     return;
  }

   res.send('Your heart is healthy')
})
