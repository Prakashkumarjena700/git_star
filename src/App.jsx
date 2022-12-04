import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)} >INC</button>
      <button onClick={() => setCount(count - 1)} >DEC</button>
    </div>
  );
}

export default App;
