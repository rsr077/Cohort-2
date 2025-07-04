import { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'


import axios from 'axios'


function App() {
  const [token, setToken] = useState<string>("")

  return (
    <>
  <input placeholder='OTP'></input>
  <input placeholder='New password'></input>

   <Turnstile onSuccess={(token) => {
    setToken(token)
  }} siteKey='0x4AAAAAABjj9dZHbKi4ShJv' />

  <button onClick={() =>  {
    axios.post("http://localhost:3000/rest-password", {
       email: "rajeev@gmail.com",
       otp: "123456",
       token: token,
    })
  }}> Update password</button>
    </>
  )
}

export default App
