const express = require("express")
const app = express();

const todo =[{
  morning:"breakfast",
  afernoon:"lunch",
  night: "dinner"
}]

app.use(express.json());

app.get("/", function(req,res){
  res.send(todo);
})

res.json({
  todo
})

app.listen(3000)