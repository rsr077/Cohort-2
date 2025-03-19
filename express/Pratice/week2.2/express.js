const epxress = require("express")

const app = epxress();

 const users = [{
  name:"john",
  kidneys:[{
     healthy:false,
  }]
 }]
  app.use(epxress.json());
 app.get("/",function(req,res){
  const johnkidneys = users[0].kidneys;
  const numberofkidnery = johnkidneys.length;
  let numbersofHealthyKidenys = 0; 
 
   for(let i = 0; i<johnkidneys.length; i++) {
    if( johnkidneys[i].healthy) {
      numbersofHealthyKidenys  = numbersofHealthyKidenys + 1;
    }
   }

    const numberofUnhealthyKidneys = numberofkidnery - numbersofHealthyKidenys;

    res.json({
      numberofkidnery,
      numbersofHealthyKidenys,
      numberofUnhealthyKidneys
    })
 })

 
 app.post("/", function(req,res) {
  console.log(req.body);
   const isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
    healthy: isHealthy
   })
    res.json({
    msg:"Done!"
    })
 })


 app.put("/",function(req,res){

  for(let i = 0; i<users[0].kidneys.length; i++) {
     users[0].kidneys[i].healthy = true;
  }
  res.json({});
 })

   // removing all the unhealthy kidneys 



 app.delete("/",function(req,res){

  if(isThereAtleastOneUnhealthyKidney()) {
     
    const newkidneys = [];

    for(let i = 0; i<users[0].kidneys.length; i++) {
     if(users[0].kidneys[i].healthy) {
       newkidneys.push({
        healthy:true
       })
     }
    }
 
      users[0].kidneys = newkidneys;
      res.json({msg: "done"})

    }else {
        res.sendStatus(411).json({
          msg:"YOu have no bad kidneys";
        });
    } 

  })
 


   // only if atleast one unhealthy kidney is there do this ,else return 411 

  

 

    function isThereAtleastOneUnhealthyKidney() {
      let atleastOneUnhealthkidney  = false;
    
      for(let i = 0; i<users[0].kidneys.length; i++) {
       if(!users[0].kidneys[i].healthy) {
          atleastOneUnhealthkidney = true;
       }
      }

      return atleastOneUnhealthkidney
   
    }

 app.listen(3000)

