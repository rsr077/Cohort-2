const zod = require("zod");

const createTodo = ({
   title: zod.string(),
   description: zod.string()
})

 const updateTood = ({
    id: zod.string()
 })

 

 module.exports ={
     createTodo,
     updateTood
 }