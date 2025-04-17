
const exprees = require("express")
const app = exprees()

app.get("/intrest",function(req,res){
   
  const principle = req.query.principle;
  const rate = req.query.rate;
  const  time = req.query.time;

  const interest = (principle * rate * time)/100
  const total = parseInt(principle) + parseInt(interest)

  res.send({
    principle,
    interest,
    total
  })
})

app.listen(3000)