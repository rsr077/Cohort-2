const express = require("express");
const { use } = require("react");
const app = express();

const users = [{
    name: "john",
    kidney:[{
      healthy: false
    }]
}]

 app.get("/", function(req,res){
     const johnkidney = users[0].kidney;
     const numberOfJohnKideny = johnkidney.length;
     console.log(johnkidney);
     
     let numberOfhealthyKidneys = 0;
     for(let i = 0; i<johnkidney.length; i++){
       if(users[0].johnkidney){
         const numberOfhealthyKidneys = numberOfhealthyKidneys + 1
       }
     }
     const numbersOfUnhealtyKidney = numberOfJohnKideny - numberOfhealthyKidneys;
    
     res.json({
      numberOfJohnKideny,
      numberOfhealthyKidneys,
      numbersOfUnhealtyKidney
     })
    })

    app.post("/",function(req,res){
      const ishealthy = req.body.ishealthy;
       users[0].kidney.push({
        healthy :ishealthy
       })
       res.json({
        "msg": "Done"
       })
    })

    app.put("/",function(req,res){
      for(let i = 0; i<users[0].kidney.length; i++) {
         users[0].kidney[i].healthy = true;
      }
      res.json({})
    })

    app.delete("/",function(req,res){
      if(isThereAtleastOneUnhealthyKidney()) {
        const newkidneys  = [];
        for(let i = 0; i<users[0].kidney.length; i++) {
           if(users[0].kidney[i].healthy){
              newkidneys.push({
                 healthy: true
              })
           }
        }

        users[0].kidney = newkidneys;
        res.json({
           msg: "done"
        })
      } else {
        res.status(411).json({
          msg: "you have no bad kidneys"
        })
      }
    })

    function isThereAtleastOneUnhealthyKidney() {
       let atleastOncehealthykidney = false;
       for(let i = 0; i<users[0].kidney.length; i++){
        if(!users[0].kidney[i].healthy){
           atleastOncehealthykidney = true;
        }
       }
       return atleastOncehealthykidney;
    }
  app.listen(3000)