
const express = require("express")
const app = express();

  function userMiddlware(req,res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

     if(username != "rajeev" || password != "pass") {
      res.status(403).json({
        msg:"You are incorrect"
      })
     }else {
      next();
     }

       
  } ;

    function kidneyMiddleware (req,res,next) {

      const kidney = req.query.kidney;

      if(kidney != 1 && kidney != 2) {
        res.status(403).json({
          msg:"you incorrect"
        });
      }else {
        next();
      }
    };

    app.get("/health-chekup" , userMiddlware,kidneyMiddleware, function(req,res) {
       res.send("you 're right ")
    });

    app.listen(3000)