import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = ["Click", "Press", "Hit", "Push", "Click me", "Hit me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    return setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
