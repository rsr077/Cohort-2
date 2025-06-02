import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Practice JavaScript" },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;

    const newTodo = {
      id: Date.now(), // use timestamp as unique id
      name: newItem,
    };

    setItems([...items, newTodo]);
    setNewItem(""); // clear input
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
