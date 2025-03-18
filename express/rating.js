 const express = require("express")
 
 const app = express();

const users  = [{
  name:"raj",
  rating:[{
    good:false,
  }]
}]

  app.get("/",function(req,res){
      const rajrating = users[0].rating;
   const numbersofrating = rajrating.length;

   let numberofgoodrating = 0;

  for(let i= 0; i<=rajrating; i++){
    if(rajrating[i].good){
      numberofgoodrating = numberofgoodrating +1;
    }
  }
   
 const numberofbedrating = numbersofrating - numberofgoodrating;


 res.json({
  numbersofrating,
  numberofgoodrating,
  numberofbedrating
 })


  })

  app.listen(3000)