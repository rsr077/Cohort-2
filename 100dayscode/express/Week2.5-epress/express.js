const express = require('express')
const app = express();

const users = [{
   name: "john",
   kidneys: [{
     healthy: false
   }]
}]

  app.use(express.json());

 app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberOfkidneys = johnkidneys.length;

    let numberOfhealthyKidneys = 0;
    for(let i = 0; i<johnkidneys.length; i++) {
      if(johnkidneys[i].healthy){
        numberOfhealthyKidneys = numberOfhealthyKidneys + 1;

      }
   
    }
    const numbersOfUnhealtyKidney = numberOfkidneys - numberOfhealthyKidneys;
    res.send({
       numberOfkidneys,
       numberOfhealthyKidneys,
       numbersOfUnhealtyKidney
    })

 })


 app.post("/",function(req,res){
    const ishealthy = req.body.isHealthy;
    users[0].kidneys.push({
      healthy: ishealthy
    })
    res.json({
      msg: "done"
    })
 })

   app.put("/",function(req,res){
    for(let i = 0; i<users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({})
   })


   // removeing all unhealthy kidneys 

      // removeing all unhealthy kidneys 
app.delete("/",function(req,res){
  if(isThereAtleastOneUnhealthyKidney()){
  const newkidneys  = [];
  for(let i = 0; i<users[0].kidneys.length; i++) {
    if(users[0].kidneys[i].healthy){
      newkidneys.push({
       healthy: true
      })
    }
  }
   users[0].kidneys = newkidneys;
   res.json({
     msg: "done"})

  } else {
     res.status(411).json({
      msg: "you have no bad kidneys"
     });
    }
})


function isThereAtleastOneUnhealthyKidney(){
   let atleastOncehealthykidney = false;
   for(let i = 0; i<users[0].kidneys.length;i++) {
     if(!users[0].kidneys[i].healthy){
       atleastOncehealthykidney  = true;
     }
   }
   return atleastOncehealthykidney
}

 app.listen(3000)




 