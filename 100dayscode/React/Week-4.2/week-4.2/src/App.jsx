import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
 
  import { useState } from 'react';
    <>





  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    setSum(Number(num1) + Number(num2)); // Calculate sum
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)} // Update num1 on change
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)} // Update num2 on change
        placeholder="Enter second number"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      <p>Sum: {sum}</p> {/* Display the sum */}
    </div>
  );
}

export default SumCalculator;

   
  


   {/*  <button  onClick={() => setCount((countd) => countd + 1)}>
      count is {count}
    </button> */}
    </>
  


export default App
