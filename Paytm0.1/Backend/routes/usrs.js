const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

const router  = express.Router();


const signupBody = zod.object ({
   username:zod.string().email(),
   password: zod.string(),
   firstName: zod.string(),
   lastName: zod.string()
})

router.post("/signup",(req,res)=> {
    const {success} = signupBody.safeParse(req.body)
  if(!success) {
 return   res.status(403).json({
      message: "Fill all the right credintals"
    })
  }
   const {username} = req.body;

   const payload = {username};

  const token = jwt.sign(payload, JWT_SECRET)
   res.json({
    message: "It's you're token" + token
   })
})

 module.exports = router;