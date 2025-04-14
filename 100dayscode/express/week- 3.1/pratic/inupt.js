const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkups", function (req, res) {
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("You have " + kidneyLength + " kidneys");
  });

// global catch

    app.use(function(err, req,res ,next){
      res.json({
        msg: "Sorry something is up with out server"
      })
    })


app.listen(3001);



/* const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkups", function (req, res) {
    const kidney = req.body.kidney;
   if(!kidney) {
     res.json({
       msg: "wrong inputs"
     })
   }else {
    const kidneyLength = kidney.length;
    res.send("You have " + kidneyLength + " kidneys");

   }
    


app.listen(3002);
 */

