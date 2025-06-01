import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!title || !description) {
      setMessage("Please fill out both fields.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error("Failed to add todo");
      }

      const json = await res.json();
      setMessage("✅ Todo added successfully!");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add todo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 10, marginBottom: 10, width: "100%" }}
        type="text"
        placeholder="Title"
      />
      <br />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: 10, marginBottom: 10, width: "100%" }}
        type="text"
        placeholder="Description"
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add to Todo"}
      </button>
      {message && (
        <p style={{ marginTop: 10, color: message.includes("✅") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}
