import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

const TodosActions = ({ resetTodos, deleteComplitedTodos, list }) => {
  return (
    list.length > 0 && (
      <div className={styles.directBtns}>
        <Button title="Reset Todos" onClick={resetTodos}>
          <RiRefreshLine />
        </Button>
        {list.find((todo) => todo.isCompleted) && (
          <Button title="Clear Completed Todos" onClick={deleteComplitedTodos}>
            <RiDeleteBin2Line />
          </Button>
        )}
      </div>
    )
  );
};

export default TodosActions;
