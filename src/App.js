import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 className="title">Counter</h1>
    </div>
  );
}

export default App;
