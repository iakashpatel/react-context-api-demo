import React, { useContext } from "react";
import { store } from "./store.js";

function DisplayDigit(){
   const globalState = useContext(store);
  const { state } = globalState;
  const { digit } = state;
  return (<h3>{digit}</h3>)
}

export default DisplayDigit