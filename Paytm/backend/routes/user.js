const express = require("express");
const zod = require("zod");
const router = express.Router()
const {User ,Account} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("./middleware");



const SignupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

 router.post("/signup",async(req,res)=> {
    const {success} = SignupBody.safeParse(req.body);
    if(!success) {
    return    res.status(411).json({message: "Fill all these things"})
    }

    const exitingUser = await User.findOne({
         username: req.body.username

    })

    if(exitingUser) {
        return res.status(411).json({
            message: "Email already used"
        })
    }

     const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
     })
     const userId  = user._id;
     
     /// --- Create new account --- 

     await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
     })


     // --------------------------

     const token = jwt.sign({
        userId
     }, JWT_SECRET);

     res.json({
        message: "User created successfully",
        token: token
     })
 })

 const SigninBody = zod.object({
    username: zod.string(),
    password: zod.string()
 })

 router.post("/sigin",async(req,res)=> {
    const {success} = SigninBody.safeParse(req.body);
    if(!success) {
     return   res.status(411).json({message: "Wrong input"})
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user) {
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error whilt logging in"
    })
 })




// other auth routes



 const updateBody = zod.object ({
     password : zod.string().optional(),
     firstName: zod.string().optional(),
     lastName:  zod.string().optional()

 })
   router.put("/",authMiddleware,async(req,res) => {
     const {success} = updateBody.safeParse(req.body);
     if(!success) {
        return res.send(403).json({message: "Error while upadation information"}) 
     }

     await User.updateOne({_id:req.userId},req.body)
      res.json({
        message: "Updated successfully"
      })
   })
   

   // 1  router get  - "/bulk" - const filter - req--
   // 2  await first  name and last name  
  //  ->   cosnt users = await.User.find() - $or - $regex :filter 
   // json file map  
   // res.json({
   //  : users.map(user = ()) -  _id: user._id
   // })


 router.get("/bulk",async(req,res)=> {
    const filter = req.query.filter || "";
     const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
     })
      
      res.json({
        user: users.map(user => ({
             username: user.username,
             firstName: user.firstName,
             lastName: user.lastName
        }))
      })
 })

 module.exports = router;