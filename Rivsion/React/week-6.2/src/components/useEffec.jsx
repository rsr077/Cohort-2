
import { useEffect, useState } from "react";

export function ReactUseEffect() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []); // empty array = run once on mount

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}













/* import { useEffect } from "react";
 export function  ReactUseEffect() {
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 10000);

  // Cleanup on unmount
  return () => {
    clearInterval(timer);
  };
}, []);

 }
  */