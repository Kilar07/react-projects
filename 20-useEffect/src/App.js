import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log("useEffect called");

    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log(todo);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
