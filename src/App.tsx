// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Numbers from "./Numbers/Numbers.tsx";
let a = [1,2,3,4,5]
function App() {

  return (
    <div>
        <button>New numbers</button>
        <Numbers numbers={a}/>
    </div>
  )
}

export default App
