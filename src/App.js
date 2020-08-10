import React from "react";

// for redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLog } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);

  const logInfo = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>COUNTER: {counter}</h1>
      <h1>Login Info: {String(logInfo)}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(toggleLog())}>Toggle Login Info</button>
    </div>
  );
}

export default App;
