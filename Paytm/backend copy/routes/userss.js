
const express = require("express");
const jwt =  require("jsonwebtoken");
const zod = require("zod");
const bodyParser = require("body-parser");
const {JWT_SECRET} = require("../config")
const router = express.Router();

 const app =  express()

app.use(bodyParser.json());

 const bodySignup  = zod.object({
  userName: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
 })

  app.post("/signup",(req,res)=> {
    const {success} = bodySignup.safeParse(req.body);
    if(!success){
   return     res.status(403).json({message: "Fill all these things"})
    }

   const {userName}  = req.body;
   const payload = {userName}
   const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"})
   res.status(200).json({massage: "You have creatre sucussfuly account",token})

  })
 


app.listen(3000);

 












module.exports = router 