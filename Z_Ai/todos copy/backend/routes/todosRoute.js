const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST create a new todo
router.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = await Todo.create({ title, description });
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "Failed to create todo", error: err.message });
  }
});

// PUT update a todo
router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo", error: err.message });
  }
});

module.exports = router;
