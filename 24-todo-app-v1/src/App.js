import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [list, setList] = useState([])

  const addItem = (text) => {
    setList([...list, text])
  }

  const deleteTodo = (index) => {
    setList(list.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <TodoForm addItem={addItem}/>
      <TodoList list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
