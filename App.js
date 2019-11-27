import React, { useContext } from "react";
import { store } from "./store.js";

function App(props) {
  const globalState = useContext(store);
  const { state } = globalState;
  const { digit } = state;
  const { dispatch } = globalState;
  console.log(globalState);

  function randomDigit() {
    dispatch({ type: "random", value: parseInt(Math.random() * 999999, 0) });
  }

  return (
    <div>
      <h1>Guess The Digit</h1>
      <h3>{digit}</h3>
      <p>
        Global State management without Redux but just context-api and hooks
      </p>
      <button onClick={randomDigit}>Change Digit</button>
    </div>
  );
}

export default App;
