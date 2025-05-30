import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async function (res) {
              const json = await res.json();
          alert(`Todo is completed: ${json.message || "Success"}`);                
            })
            .catch((err) => {
              console.error("Error adding todo:", err);
              alert("Failed to add todo");
            });
        }}
      >
        Add to todo
      </button>
    </div>
  );
}
