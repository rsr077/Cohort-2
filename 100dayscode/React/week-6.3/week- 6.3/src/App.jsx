import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';
import { useEffect,useMemo } from 'react';

function App() {
  const [exchangeDate1 , setExchangeData1] = useState({})
  const [expchgeDate2, setExchangeData2]  = useState({})
  const [bankData , setBankData] = useState({});




useEffect (()=> {

     setExchangeData1({
      return : 100
     });

},[])


useEffect (()=> {

  setExchangeData2({
   return : 100
  });

},[])


  useEffect(function () {
  setTimeout(() => {
    setBankData({
     income : 100
    },[]);
 },3000)
 })

  const cryptoReturns  = useMemo(() => {
    return exchangeDate1.return + expchgeDate2.return;
  }, [exchangeDate1, expchgeDate2]) 

  const incomeTax = (bankData.income + cryptoReturns) * 0.3;
  
  return (
    <div>
  hi there it's your incometax{incomeTax}
    </div>
  )
}

export default App
