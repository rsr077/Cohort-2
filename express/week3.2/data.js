const express = require("express");
const jwt = require("jsonwebtoken");
const  jwtPassword  = "123456";

const app = express();

 const ALL_USERS = [
  {
    username: "rajeev@gmail.com",
    password: "123",
    name: "rajeev singh"
  },
  {
    username :"rohan@gmail.com",
    password: "12345",
    name: "Raman singh",
  },
  {
    username: "muskan@gmail.com",
    password: "1232324",
    name: "Muskan jain"
  }
 ];

 function userExists (username, password) {
  // 
 }

 app.post("/signin",function(req,res) {
   const username = req.body.username;
   const password = req.body.password;

   if(!userExists(username, password)) {
     return res.status(403).json({

     });
   }
 var token = jwt.sign({username: username}, "shhhhh");
 return res.json({
  token,
 });
 
});

app.get("/users",function(req,res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    //  return a list of users other than this username


  }catch(err) {
    return res.status(403).json({
       msg:"Invalid token"
    });
  }
})
