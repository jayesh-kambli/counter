import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{margin: "2rem"}}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => {setCount((prev) => prev+1)}}>Increment</button>
        <button onClick={() => {setCount((prev) => prev-1)}}>Decrement</button>
        {/* <button>Decrement</button> */}
      </div>
    </div>
  );
}

export default App;
