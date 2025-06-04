import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function Timer() {
  // State for the todo input and filter text
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  // Ref to focus input after adding a todo
  const inputRef = useRef(null);

  // useEffect to focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add new todo (useCallback to avoid re-creating function unnecessarily)
  const addTodo = useCallback(() => {
    if (todo.trim() === "") return;
    setTodos((prev) => [...prev, todo.trim()]);
    setTodo("");
    inputRef.current.focus();
  }, [todo]);

  // Memoized filtered list so we only recalc when todos or filter change
  const filteredTodos = useMemo(() => {
    console.log("Filtering todos...");
    return todos.filter((t) => t.toLowerCase().includes(filter.toLowerCase()));
  }, [todos, filter]);

  // useRef to keep track of how many todos have been added (without rerender)
  const todosAddedCount = useRef(0);

  useEffect(() => {
    todosAddedCount.current = todos.length;
  }, [todos]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Todo List</h2>

      {/* Input and add button */}
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

      {/* Filter input */}
      <div style={{ marginTop: 20 }}>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter todos"
          style={{ padding: 5, width: "100%" }}
        />
      </div>

      {/* Todo list */}
      <ul style={{ marginTop: 20 }}>
        {filteredTodos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      {/* Show how many todos added using useRef */}
      <p>
        Total todos added (tracked with useRef): {todosAddedCount.current}
      </p>
    </div>
  );
}
