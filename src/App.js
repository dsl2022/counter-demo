import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const handlerAdd = () => {
    if (isDisabled) setIsDisabled(false);
    setCounter(counter + 1);
  };
  const handlerSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setIsDisabled(true);
    }
    // else
  };
  console.log({ counter, isDisabled });
  return (
    <div className="App">
      <h1 className="title">Counter</h1>
      <div className="counter">{counter}</div>
      <button onClick={handlerAdd} className="add">
        Add 1
      </button>
      <button disabled={isDisabled} onClick={handlerSub} className="sub">
        Sub 1
      </button>
    </div>
  );
}

export default App;
