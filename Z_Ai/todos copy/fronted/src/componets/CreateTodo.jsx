import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (!title || !description) return toast.warn("Please fill all fields");

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        toast.success("✅ Todo added");
        setTitle("");
        setDescription("");
        fetchTodos();
      } else {
        toast.error("❌ Failed to add todo");
      }
    } catch (err) {
      toast.error("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  const updateTodo = async () => {
    if (!title || !description) return toast.warn("Please fill all fields");
    if (!editId) return toast.error("❌ Missing todo ID");

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/todos/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        toast.success("✅ Todo updated");
        setTitle("");
        setDescription("");
        setIsEditing(false);
        setEditId(null);
        fetchTodos();
      } else {
        const err = await res.json();
        toast.error("❌ Failed to update: " + err.message);
      }
    } catch (err) {
      toast.error("❌ Error: " + err.message);
    }
    setLoading(false);
  };

  const handleEdit = (todo) => {
    setIsEditing(true);
    setEditId(todo._id);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📝 Full Stack Todo App</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={isEditing ? updateTodo : handleSubmit} disabled={loading}>
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>

      <h2 style={{ marginTop: "2rem" }}>📋 Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>{todo.title}</strong> - {todo.description}{" "}
            <button onClick={() => handleEdit(todo)}>Edit</button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
}

export default App;
