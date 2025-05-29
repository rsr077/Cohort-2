const zod = require('zod');

const createTodo = zod.object({
   title: zod.string().min(1),
   descritpion: zod.string().min(1)
})

  const updateTodo = zod.object({
     id: zod.string()
  })

  module.exports = {
     createTodo,
     updateTodo
  }