const express = require("express")

const app = express();

app.use(express.json())

app.post("/health-checkup", function(req,res){
   const kindndy = req.body.kindndy;
   const kidneyLength  = kindndy.length;
   res.send ('you have' + kidneyLength + 'kidneys');
})

app.use(function(err,req,res,next) {
   res.json({
    msg: "Sorry something is up with our server"
   })
})

app.listen(3000)