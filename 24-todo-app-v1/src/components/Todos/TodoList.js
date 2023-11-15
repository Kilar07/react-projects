import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ list, deleteTodo }) => {
  return list.length > 0 ? (
    <div className={styles.todoListContainer}>
      {list.map((text, index) => (
        <Todo key={index} text={text} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  ) : (
    <h2>Todo list is empty</h2>
  );
};

export default TodoList;
