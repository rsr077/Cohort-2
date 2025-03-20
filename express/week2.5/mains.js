
const express = require("express")
const app = express();

const users = [{
  name:"John",
  kidneys:[{
    healthy:true,

  }]
}];

 app.use(express.json());


app.get("/",function(req,res) {
    const johnkidneys = users[0].kidneys;
    const numberOfKidenys = johnkidneys.length;
    let numbersofHealthyKidenys = 0;

    for(let i = 0; i<johnkidneys.length; i++){
      if(johnkidneys[i].healthy) {
        numbersofHealthyKidenys = numbersofHealthyKidenys +1 ;
      }
    }

    const numberofUnhealthyKidneys  = numberOfKidenys - numbersofHealthyKidenys;

    res.json({
      numberOfKidenys,
      numbersofHealthyKidenys ,
      numberofUnhealthyKidneys
    })

})

app.post("/",function(req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

  app.put("/", function(req,res) {
    for(let i = 0; i<users[0].kidneys.length; i++){ 
      users[0].kidneys[i].healthy = true;
    }
     res.json({});
  })

  app.delete("/", function(req, res) {
     const newkidneys = [];
     for(let i= 0; i<users[0]. kidneys.length; i++) {
       if(users[0].kidneys[i].healthy) {
         newkidneys.push({
           healthy:true
         })
       }
     }
     users[0].kidneys = newkidneys;
     res.json({msg: "done"})
  })

app.listen(3000)