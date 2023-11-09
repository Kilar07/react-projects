import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    return setCount(count + 1);
  };

  const resetCount = () => {
    return setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <ResetButton onClick={resetCount} count={count}/>
    </div>
  );
}

export default App;
