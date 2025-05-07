import { useContext, useState } from "react";
import {CountContext } from "./context"
function App () {
  const [count, setCount] = useState(0);

  return (
    <div>
    <CountContext.Provider value={count}>  
      <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
  <CounterRenderer />
  <Buttons  setCount={setCount}/>
  </div>
}

function CounterRenderer() {
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => {
         setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
         setCount(count - 1)
    }}>Decrease</button>
  </div>
}                 

export default App




/* import {lazy , Suspense} from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));
function App() {
  

  return (
  <div> 
 
   
   <BrowserRouter>
   <Appbar/>
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path='/' element={<Landing/>}></Route>
</Routes>
   </BrowserRouter>
   </div>
  )
}

function Appbar() {
   const  navigate = useNavigate();

   return <div>
      <div> 
    <button onClick={() => {
   navigate("/")
    }}>Landing</button>

  <button onClick={() => {
     navigate("/dashboard")
    }}>Dashboard</button>
</div>
   </div>
}

export default App
 */