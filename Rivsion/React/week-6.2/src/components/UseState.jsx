import { useState } from "react"


export const UseSate = () => {
      const [count, setCount] = useState(0);
      const [input, setInput] = useState(" ");
      
      return <div>
         <button onClick={() => setCount(count => count + 1)} >{count}</button>
         <input type=" text" placeholder="name" value={input} onChange={(e) => setInput(e.target.value) } ></input>
         <p>your name : {input}</p>
      </div>
}