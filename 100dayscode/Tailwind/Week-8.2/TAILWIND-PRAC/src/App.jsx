import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid md:grid-cols-12 '> 
   <div className='bg-blue-500 >hi</div>
   <div className=' bg-red-500 '>hi</div>
   <div className='bg-green-500 '>hi</div>
   </div>
    </>
  )
}

export default App












/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> */
