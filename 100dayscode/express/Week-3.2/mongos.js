const express = require("express");
const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://admin:Rajput%408252@cluster0.bgbly.mongodb.net/")

const User  = mongose.model('Users', {name: String, email: String, password: String, age: String});

app.post("/sigup", async function(req,res) {
   const username  = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const age =  req.body.age;


  const exitstingUser  = await User.findOne({email: username});

  if(exitstingUser) {
    return res.status(400).send("Username already exists")
  }

  const user = new User({
    name: name,
    email: password,
    password: password
  });

  user.save();
  res.json({
    "msg": "User created successfully"
  })
})