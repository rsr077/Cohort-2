
const mongoose = require("mongoose")

  mongoose.connect("mongodb+srv://admin:Rajput%408252@cluster0.bgbly.mongodb.net/todos") 

 const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed : {
   type: Boolean,
   default: false
  },

    createdAt: {
    type: Date,
    default: Date.now  // ✅ Auto sets the date and time when todo is created
  }
    
 })

  const todo = mongoose.model('todos', todoSchema )

  module.exports = {
    todo
  }

