import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [list, setList] = useState([]);

  const addItem = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setList([...list, newTodo]);
  };

  const deleteTodo = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  const toggleTodo = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodos = () => {
    setList([]);
  };

  const deleteComplitedTodos = () => {
    setList(list.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = list.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <TodoForm addItem={addItem} />
      <TodosActions
        list={list}
        resetTodos={resetTodos}
        deleteComplitedTodos={deleteComplitedTodos}
      />
      <TodoList list={list} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;
