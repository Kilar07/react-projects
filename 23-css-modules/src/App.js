import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Info />
      {/* css rules from Info.module.css doesn't work here */}
      <div className="info">
      <h1>App component heading</h1>
      <button className="my-button">App component button</button>
      </div>
    </div>
  );
}

export default App;
