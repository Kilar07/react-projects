import "./App.css";
import PetInfo from "./components/PetInfo";
import PetInfo2method from "./components/PetInfo2method";
function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} hasPet={true} />
      <PetInfo animal="monkey" age={8} hasPet />
      <PetInfo animal="dog" age={5} hasPet={false} />
      <PetInfo animal="dog" age={5} />
      <PetInfo2method animal="frog" age={1} hasPet />
      <PetInfo2method animal="frog" age={1} />
    </div>
  );
}

export default App;
