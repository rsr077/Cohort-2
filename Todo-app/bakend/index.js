const express = require("express");
const {createTodo , updateTodo} = require("./type");
const { todo } = require("./db");
const cors = require("cors")
const app = express();


app.use(express.json());
app.use(cors())

app.post("/todo",async function(req,res){
    const creatPayload =  req.body;
    const parsedPayload = createTodo.safeParse(creatPayload);

    if(!parsedPayload.success) {
      res.status(403).json({
        message: "Wrong input"
      })
      return
    }

 await todo.create({
     title: creatPayload.title,
     descritpion: creatPayload.descritpion,
    completed : false 
  })
  
   res.json({
     msg: "Todo created"
   })
      
})

app.get("/todos", async function(req,res){
        const todos = await todo.find({});
        res.json({
           todos
        })
})

app.put("/completed",async function(req,res){
      
    const updatePayload = req.body;
    const parsedPayload  = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
      res.status(403).json({
        message: "You Send Wrong input"
      })
       return;
    }
await todo.updateOne({ _id: req.body.id }, { completed: true });


   res.json({
     msg: "Todo marked as complted "
   })
      })

      app.listen(3000)