const express = require('express');
const {updateTodo} = require("./type");
const { todo } = require('../../Todo-app/bakend/db');

const app = express();

app.use(express.json());

  
 app.post("/todo", async(req,res) => {
  const parsedPayload = updateTodo.safeParse(req.body);
  if(!parsedPayload.success) {
     res.json({
      message: "It's wrong input"
     })
     return 
  }
   await todo.cretae({
      title: parsedPayload.title,
      description: parsedPayload.description,
      Boolean : false
    })

    res.json({
      message: "You have successfully created Todo"
    })

 })


  app.get("/todos", async (req,res) => {
   
     const todos = await todo.find({})
       res.json({
        todos
       })
  
 })


  app.put("/update",async (req,res) => {
     
    const parsedPayload = updateTodo.safeParse(req.body);
    if(!parsedPayload.success){
       res.status(403).json({
        message : "your wrong input "
       })
       return
    } 

    await todo.update({
      _id: req.body.id
     }, {
       completed: true
     })
  res.json({
    message: "Todo markded complted"
  })

  
 })

 app.listen(3000)