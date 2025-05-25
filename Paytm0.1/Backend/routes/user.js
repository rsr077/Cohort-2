const express  = require('express');
 const { User,Account } = require('../db'); 
const { JWT_SECRET } = require('../config');
const zod = require("zod")
const jwt = require("jsonwebtoken")
 const {authMiddleware} = require("./Middleware") 

const router  = express.Router();



const signupBody = zod.object ({
   username:zod.string().email(),
   password: zod.string(),
   firstName: zod.string(),
   lastName: zod.string()
})


router.post("/signup",async(req,res)=> {
    const {success} = signupBody.safeParse(req.body)
  if(!success) {
    res.status(403).json({
      message: "Fill all the right credintals"
    })
  }
      
  const existingUser  = await User.findOne({
     username: req.body.username
  })

    if(existingUser) {
      return res.status(411).json({
        message: "Email already taken/ Incorrect inputs"
      })
    }

     const user = await User.create({
       username: req.body.username,
       password: req.body.password,
       firstName: req.body.firstName,
       lastName: req.body.lastName
     })

     const userId = user._id;


    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000
    })


     const token = jwt.sign({
      userId     
     },JWT_SECRET);

     res.json({
      message: "User created successfully",
      token
     })

})


 const siginBody = zod.object({
    username: zod.string(),
    password: zod.string()
 })

 router.post("/sigin",async(req,res)=> {
     const {success} = siginBody.safeParse(req.body);
     if(!success) {
       res.status(411).json({message:"you're give wrong input"});
     }

     const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
     });

     if(user) {
   res.json({
    message: "login successfully"
      })
      return
     } else {
       res.json({
    message: "Please Enter right input"
      })
     }
 })

  const updateBody = zod.object({
  password: zod.string().optional(),
  firstName:zod.string().optional(),
  lastName:zod.string().optional()
 })

  router.put("/",authMiddleware,async (req,res)=> {
    const {success} = updateBody.safeParse(req.body)
    if(!success) {
      res.status(411).json({
        message: "Error while updating information"
      })
    }
       await User.updateOne({_id:req.userId}, req.body)
        res.json({
          message: "Upadated successfully"
        })
  }) 

  router.get("/bulk",async(req,res) => {
      const filter = req.query.filter || ""

      const users = await User.find({
         $or :[{
          firstName: {
            "$regex": filter 
          }
         },{
          lastName: {
            "$regex": filter
          }
         }]
      })
       
      res.json({
        user:users.map(user => ({
           username: user.username,
           firstName: user.firstName,
           lastName: user.lastName,
           _id: user._id
        }))
      })

  })
  
module.exports = router;