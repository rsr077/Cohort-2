import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



export function CreateTodo() {



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);


  
  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3001/todos");
    const data = await res.json();
    setTodos(data.todos || []);
  };

  const createTodo = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setTitle("");
        setDescription("");
        fetchTodos();
      } else {
        const json = await res.json();
        alert("❌ Failed to create todo: " + json.message);
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
    setLoading(false);
  };

  const markAsDone = async (id) => {
    await fetch("http://localhost:3001/completed", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

 



  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

 


      // ✅ Remove from UI state
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (err) {
    ({err})
     
    }
  };

  
function formatDate(dateString) {
  const options = { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

    const formatTime = (date) => {
    return dayjs(date).fromNow(); // e.g. "3 minutes ago"
  };


  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h2>Create Todo</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ margin: 5, padding: 10, width: "100%" }}
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ margin: 5, padding: 10, width: "100%" }}
      />
      <button
        onClick={createTodo}
        disabled={loading}
        style={{ padding: 10, marginTop: 10 }}
      >
        {loading ? "Creating..." : "Add Todo"}
      </button>

      <h2 style={{ marginTop: 30 }}>Todos</h2>
      {todos.length === 0 && <p>No todos yet</p>}
      {todos.map((todo) => (
        <div
          key={todo._id}
          style={{
            padding: 10,
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: 8,
            backgroundColor: todo.completed ? "#e0ffe0" : "#fff",
          }}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <small>Added on: {formatDate(todo.createdAt)}</small><br />

           <small>Added {formatTime(todo.createdAt)}</small><br />

          <p>Status: {todo.completed ? "✅ Done" : "🕒 Pending"}</p>
          {!todo.completed && (
            <button onClick={() => markAsDone(todo._id)} style={{ marginRight: 10 }}>
              Mark as Done ✅
            </button>
          )}


             <button onClick={() => handleDelete(todo._id)}>Delete</button>
      
      
        </div>
      
      ))}
  
    </div>
  );
}
