// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Numbers from "./Numbers/Numbers.tsx";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

function App() {

    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        setNumbers([1, 11, 12, 13, 13]);
    };

  return (
    <div>
        <button onClick={changeNumbers}>New numbers</button>
        <Numbers numbers={numbers}/>
    </div>
  )
}

export default App
