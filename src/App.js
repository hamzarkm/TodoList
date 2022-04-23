import React, { useState, useEffect } from "react";
import "./App.css";

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <Header />
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filtredTodos={filtredTodos} />
    </div>
  );
}

export default App;
