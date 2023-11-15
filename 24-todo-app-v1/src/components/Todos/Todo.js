import React from 'react'
import {RiTodoFill} from 'react-icons/ri'
import styles from './Todo.module.css'

const Todo = ({text, index, deleteTodo}) => {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}

export default Todo
