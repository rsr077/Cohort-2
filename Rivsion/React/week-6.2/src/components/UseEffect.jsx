import { useEffect, useState } from "react";

export function Counter() {
   const [count , setCount] = useState(0)

   useEffect(() => {
     console.log('Count change',count)
   },[count]);


return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}