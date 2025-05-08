import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom } from './atoms'
import { notificationAtom } from '../../../src/atoms'

function App() {
   return <RecoilRoot>
    <MainApp/>
   </RecoilRoot>
}

function MainApp() {
  const  networkNotificationCount = useRecoilValue(networkAtom);
 const jobsAtomCount  = useRecoilValue(jobsAtom);
 const notificationsAtomCount = useRecoilValue(networkAtom)
 const  messagingAtomCount= useRecoilValue(messagingAtom)


  return (
    <>
     <button>Home</button>

     <button> My network({networkNotificationCount  >=  100  ? "99+" : networkNotificationCount})</button>
     <button>Josbs({jobsAtomCount})</button>
     <button>Messaging({messagingAtomCount})</button>
     <button>Notification({notificationsAtomCount})</button>
     <button onClick={() => {
     
     }}>Me({totalNotificationCount})</button>
    </>
  )
}

export default App