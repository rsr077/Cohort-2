
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


// render network for nbacked 
// vercel for fronted 

function App() {
 

  return (
    < div style=
    {{background: "black",
        width : "100%"
    }}>
   <CreateTodo/> 
 {/*  <Todos todos={todos} /> */}
    </div>
  )
}

export default App
