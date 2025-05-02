import { useState } from "react"

function UseStateExample() {
  const [count, setCount] = useState(0);

  return( 
  <>
  <h1 className="text-xl mb-5">UseStateExample</h1>
  <p className="mb-5">Count: {count}</p>

  <div className="flex gap-3"> 
  <button  className="bg-blue-500 text-white px-3 py-1 rounded"  onClick={() => setCount( count + 1)}>Increase</button>

  <button  className="bg-red-500 text-white px-3 py-1 rounded" onClick={ function (){  setCount( count - 1)}}>Decrease</button>

  <button className="bg-gray-500 text-white px-3 py-1 rounded" onClick={() => setCount(0)}>Rest</button>
  </div>
  <p>const [count, setCount] = useState(0)</p>
  <p>useState gives us a variable and a function to update it.</p>
  </>
  )
}

export default UseStateExample 