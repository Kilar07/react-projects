import React, { useState } from "react";
import styles from './TodoForm.module.css'
import Button from "../UI/Button";

const TodoForm = ({ addItem }) => {
  const [text, setText] = useState("");

  const inputChange = (e) => {
    setText(e);
  };

  const sendTodo = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <h1>Todo App</h1>
      <form onSubmit={sendTodo}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => inputChange(e.target.value)}
      />
      <Button type="submit" title='Submit'>Add</Button>
    </form>
    </div>
  );
};

export default TodoForm;
