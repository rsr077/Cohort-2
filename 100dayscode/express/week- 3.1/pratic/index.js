const express = require("express")
 const app = express();

 app.get("/", function( req,res){
     const username = req.headers.username;
     const password = req.headers.password;
     const kideneyId = req.query.kideneyId;

      if(! username === "rajeev" && password === "pass"){
        /*  if(username != "rajeev" && password != "pass" */
         res.status(403).json({
         "msg": "you are not right person"
         })

        return;
      }

          if(! kideneyId === "1" && kideneyId === "2") {
         /*    if(kideneyId != 1 || kideneyId != 2) */
             res.status(403).json({
               msg: "you're not right person"
             })
             return;
          }

          res.send("your heart is healthy")
 })



 app.put("/", function( req,res){
     const username = req.headers.username;
     const password = req.headers.password;
     const kideneyId = req.query.kideneyId;

      if(! username === "rajeev" && password === "pass"){
        /*  if(username != "rajeev" && password != "pass" */
         res.status(403).json({
         "msg": "you are not right person"
         })

        return;
      }

          if(! kideneyId === "1" && kideneyId === "2") {
         /*    if(kideneyId != 1 || kideneyId != 2) */
             res.status(403).json({
               msg: "you're not right person"
             })
             return;
          }

          res.send("your heart is healthy")
 })

  app.get()