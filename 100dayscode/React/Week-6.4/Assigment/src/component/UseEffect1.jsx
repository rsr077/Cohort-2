import {useState, useEffect} from "react";

export function Assignment1_2 () {

const [count,setCount] = useState(0)
   function handleIncrement () {
    setCount(count + 1)
   }


function hanldeDecremet() {
   setCount (count - 1)
}

return(
  <div>
    <p>Count: {count}</p>
    <CountButtons onIncrement={handleIncrement} onDecrement={hanldeDecremet}/>

  </div>

)
}
  

const CountButtons  = ({ onIncrement, onDecrement}) => (
  <div>

    <button onClick={onIncrement}></button>
    <button onClick={onDecrement}></button>
  </div>

)

