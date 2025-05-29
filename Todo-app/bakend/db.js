
const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://admin:Rajput%408252@cluster0.bgbly.mongodb.net/todos")

 const todoSchema = mongoose.Schema({
  title: String,
  descritpion: String,
  completed : {
   type: Boolean,
   default: false
  }
  
 })

  const todo = mongoose.model('todos', todoSchema )

  module.exports = {
    todo
  }

