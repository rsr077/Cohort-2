import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseSate } from './components/UseState'
import { ReactRetrns } from './components/React_Return'
import  { ReactKey } from './components/key'
import { Wrapper } from './components/Wrapper'
import { Counter } from './components/UseEffect'
import { ReactUseEffect } from './components/useEffec'
function App() {


  return (
    <>
  <ReactUseEffect/>
   <Counter/>
     
 {/*  <Wrapper>
  <h1>Hello, Rajeev!</h1>
  <p>Welcome to my app.</p>
</Wrapper>
 */}
  {/*   <TodoList/> */}
 {/* <ReactKey/> */}
   {/*  <UseSate/> */}
{/*    <ReactRetrns/> */}
    </>
  )
}

export default App
