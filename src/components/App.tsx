import React from "react";
import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      Hello World!
      <p>{count}</p>
      <button onClick={increment}><span>Increment</span></button>
    </div>
  );
}
