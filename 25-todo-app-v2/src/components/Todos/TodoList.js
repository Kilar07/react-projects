import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ list, deleteTodo, toggleTodo }) => {
  return list.length > 0 ? (
    <div className={styles.todoListContainer}>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  ) : (
    <h2>Todo list is empty</h2>
  );
};

export default TodoList;
