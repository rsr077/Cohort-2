import {lazy , Suspense} from 'react'
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
