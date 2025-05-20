const express = require("express")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../backend/config")

const app = express();
app.use(express.json());


const user = {
  name: 'rajeev',
  password: '122423'
}

 app.post("/login",(req,res) => {
     const {name , password} = req.body;
     if(name === user.name && password === user.password) {
      const payload = {name}
      const token = jwt.sign(payload, JWT_SECRET )
      res.json({messege: 'login sucussfully ', token })
     }else {
       res.json({messege: 'Invaild credentials' })
     }
 })

 app.listen(3000)