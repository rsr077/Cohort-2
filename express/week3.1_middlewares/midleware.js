const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res) {
   const username = req.headers.username;
   const password = req.headers.password;
   const kidneyId = req.query.kidneyId;

   if(username != "rajeev" || password != "pass") {
     res.status(400).json({"msg:": "Something up with your inputs"})

     return
   }

    if(kidneyId !=1 && kidneyId != 2) {
      res.status(400).json({"msg": "Something up with your inputs"})
      return
    }

    // do something wit kidney here 

    res.json({
      msg:"Your kidney is fine!"
    })

});

app.listen(3000);