import './App.css';
import Numbers from "./Numbers/Numbers.tsx";
import {useState} from "react";

function App() {
    const getNumber = (min: number = 5, max: number = 36) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomNumbers = (currentMax: number, arr: number[]) => {
        if (arr.length === 5) {
            return arr;
        }
        let number = getNumber(5, currentMax);
        if (number > arr[arr.length - 1] || arr.length === 0) {
            arr.push(number);
            currentMax += 5;
        }
        getRandomNumbers(currentMax, arr);
    };

    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        let current = 11;
        let arrOfNumbers:number[] = [];
        getRandomNumbers(current, arrOfNumbers);
        setNumbers(arrOfNumbers);
    };

  return (
    <div>
        <button onClick={changeNumbers}>New numbers</button>
        <Numbers numbers={numbers}/>
    </div>
  );
}

export default App;
