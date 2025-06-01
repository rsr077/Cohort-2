
import { useState } from "react";


export function MyComponent() {
    const [message, setMessage] = useState("")
    
    function handleFunciton() {
       setMessage("hi everyone")
    }

    return <>
   <button onClick={handleFunciton}>Add</button>
   <p>{message}</p>
    
    </>
}