const  express = require("express")

const app = express();

function sum(a,b) {
   return a + b;
}

 app.get("/",function(req,res){


     const a = parseInt(req.query.a);
     const b = parseInt(req.query.b);

     if (!(a) & !(b)) {
      return res.status(400).send('Invalid numbers');
    }
  
 
     res.send(sum(a,b).toString())
 })

 app.listen(3000)


 //  You need to create 4 routes (4 things that the hospital can do)

 // GET - You can check how many kidneys 
 // POST - user can add a new kideny 
 // PUT - user can repalce a kideney, make it healty 

 // DELETE  - User can remove a kidneys 