import React, { useContext } from "react";
import { store } from "./store.js";
import DisplayDigit from "./DisplayDigit";

function App(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  function randomDigit() {
    dispatch({ type: "random", value: parseInt(Math.random() * 999999, 0) });
  }

  return (
    <div>
      <h1>Guess The Digit</h1>
      <DisplayDigit />
      <p>
        Global State management without Redux but just context-api and hooks
      </p>
      <button onClick={randomDigit}>Change Digit</button>
    </div>
  );
}

export default App;
