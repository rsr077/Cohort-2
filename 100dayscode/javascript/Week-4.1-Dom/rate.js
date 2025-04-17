/* const exprees = require("express")

const app = exprees();

app.get("/interest",function(req,res) {
   const principle  = parseInt(req.query.principle);
   const rate = parseInt(req.query.rate);
   const time = parseInt(req.query.time);

   const interest  = (principle  * rate * time) /100;
   const total = principle + interest;

   res.send({
    total: total,
    interest: interest,
   })
})

app.listen(3000) */

const exprees = require("express");
const app = exprees();

app.get("/interest",function(req,res){
    const principle = parseInt(req.query.principle)
    const rate = parseInt( req.query.rate);
    const time = parseInt( req.query.time);

    const interest = ((principle * rate * time) /100)
    const total = principle + interest;

    res.send({
      principle,
      total,
      interest
    })
})
app.listen(3000)