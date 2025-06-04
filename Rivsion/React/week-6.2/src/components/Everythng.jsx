import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodo = useCallback(() => {
    if (todo.trim() === "") return;
    setTodos((prev) => [...prev, todo.trim()]);
    setTodo("");
    inputRef.current.focus();
  }, [todo]);

  const filteredTodos = useMemo(() => {
    console.log("Filtering todos...");
    return todos.filter((t) => t.toLowerCase().includes(filter.toLowerCase()));
  }, [todos, filter]);

  const todosAddedCount = useRef(0);

  useEffect(() => {
    todosAddedCount.current = todos.length;
  }, [todos]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Todo List</h2>

      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add new todo"
        style={{ padding: 5, marginRight: 8 }}
      />
      <button onClick={addTodo} style={{ padding: "5px 10px" }}>
        Add
      </button>

      <div style={{ marginTop: 20 }}>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter todos"
          style={{ padding: 5, width: "100%" }}
        />
      </div>

      <ul style={{ marginTop: 20 }}>
        {filteredTodos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <p>
        Total todos added (tracked with useRef): {todosAddedCount.current}
      </p>
    </div>
  );
}
