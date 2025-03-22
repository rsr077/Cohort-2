const express = require("express")
const app = express();

 app.get("/health-checkup", function(req,res){
   const username = req.headers.username;
   const password = req.headers.password;
   const kidneyId = req.query.kidneyId;

   if(username != "rajeev" || password != "pass") {
    res.status(403).json({
      msg: "You are not allow"
    })
    return
   }


    if(kidneyId !=1 && kidneyId !=2) {
      res.status(403).json ({
        msg: "you are not"
      })
      return
    }
     res.json({
      msg: "you have "
     })
 })

 app.listen(3000)