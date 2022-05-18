import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="app">
      <div className="decrement" onClick={() => setCounter(counter - 1)}>-</div>

      <h1 className={counter > 100 ? "positive" : counter < 5 ? "negative" : null}>{counter}</h1>
      
      <div className="increment" onClick={() => setCounter(counter + 1)}>+</div>
    </div>
  );
}

export default App;