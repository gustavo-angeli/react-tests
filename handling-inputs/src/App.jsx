import './App.css';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const [inputValue, setInputValue] = useState();

  function handleInputValue(newValue) {
      setInputValue(newValue);
  }
  
  return (
    <div className="App">
      <div className='container'>
        <div className="first">
          <Input type={"text"} handleChange={handleInputValue} >Field1</Input>
        </div>
        <div className='second'>
          <p>{inputValue ? inputValue : "empty input"}</p>
        </div>
      </div>
      
    </div>
  );
}