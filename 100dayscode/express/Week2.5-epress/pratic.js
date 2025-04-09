const express = require('express')
const app = express();


const users = [{
   name:"rajeev",
   kidneys:[{
    healthy:false
   }]
}]

 app.use(express.json())

 app.get("/", function(req,res){
    const johnkidneys = users[0].kidneys;
     const numberOfkidneys = johnkidneys.length;


     let numberOfhealthyKidneys = 0;
      for(let i = 0; i<johnkidneys.length; i++) {
        if(users[i].johnkidneys){
          numberOfhealthyKidneys = numberOfhealthyKidneys + 1;
        }
  
      }
      const numberOfUnhealthyKidneys = numberOfkidneys - numberOfhealthyKidneys;

      res.json({
        numberOfkidneys,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys,
      })
 })
app.post("/",function(req,res){
   const isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
     healthy:isHealthy
   })
   res.json({
     msg:"doen"
   })
})

app.put("/",function(req,res){
   for(let i =0; i<users[0].kidneys.length; i++){
     users[0].kidneys[i].healthy  = true;
   }
   res.json({})
})

app.delete("/", function(req,res){
   const newkidneys = []
    for(let i = 0; i<users[0].kidneys.length; i++) {
      if(users[0].kidneys[i].healthy) {
         newkidneys.push({
          healthy: true
         })
      }
    }
     users[0].kidneys = newkidneys;
     res.json({msg: "done"})
})

 app.listen(3000)