import React from "react";
import "./App.css";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <hr />
      <Home />
    </div>
  );
}

export default App;
