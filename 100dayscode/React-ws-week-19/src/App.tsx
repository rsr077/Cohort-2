import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSeocket] = useState<any>(null)

  const [lastMessage, SetlastMessage]  = useState("")

  useEffect(() =>  {
     const socket  = new WebSocket('ws://localhost:8080')
     socket.onopen = ()=> {
      console.log('Connected')
      
       setSeocket(socket)
     }

      socket.onmessage = (message) =>  {
        console.log("Recevide  message:",message.data)
       SetlastMessage(message.data)
      }

    
  }, [])


  if(!socket) {
  
    return (
    <>
    Connecting to socket server ....
    </>
  )
}


return <>
<input></input>
   {lastMessage}
</>
}
export default App
