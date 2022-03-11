import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    };
    setTodos([...todos.concat(newTodo)]);
    setTodo("");
  };

  const deleteHandler = (id) => {
    const newTodo = [...todos].filter((el) => el.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <h1>Todo-App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.text}</p>
            <button onClick={() => deleteHandler(e.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
