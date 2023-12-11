import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

export default function App() {
  const [number, setNumber] = useState(0);

  function increaseWhenClicked() {
    setNumber(number + 1);
  }

  function decreaseWhenClicked() {
    setNumber(number - 1);
  }

  function resetCountWhenClicked() {
    setNumber(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <button onClick={increaseWhenClicked}>Increase</ button>
        <button onClick={resetCountWhenClicked}>Reset</button>
        <button onClick={decreaseWhenClicked}>Decrease</button>
      </header>
    </div>
  );
}