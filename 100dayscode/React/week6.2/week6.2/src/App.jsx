import { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count =  useMemo(() => {

     let finalCont  = 0;
 for(let i =1; i<= inputValue; i++) {
      finalCont = finalCont + i;
    }

    return finalCont;

  }, [inputValue]);



  

  
  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
      console.log(e.target.value)
    }} placeholder=  {"Find sum from 1 to n"}></input>
    <br/>
    Sum from 1 to {inputValue} is {count}
    <br/>
    <button onClick={() => {
       setCounter(counter + 1 );
    }}>Conter ({counter})</button>
  </div>
 
}



export default App