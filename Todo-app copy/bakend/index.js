const express = require("express");
const {createTodo , updateTodo , createdAt} = require("./type");
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
 description: creatPayload.description,

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

        app.get("/todos", async (req, res) => {
 
});

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

     app.delete("/todos/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    await todo.findByIdAndDelete(todoId); // ✅ This deletes the document from DB
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

      app.listen(3001)