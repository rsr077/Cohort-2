const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());

app.use("app/v1",mainRouter)

app.post("/app/v1/user/signup", function(req,res) {
  
}) 

app.listen(3000)
