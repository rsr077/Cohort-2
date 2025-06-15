import React, { useEffect, useState } from 'react';

export const Solutin =() => {
 const [bankData, setBankData] = useState({});

 const [exchaggData, setExchaggData] = useState({});
 const [bankDatas, setBankDatas] = useState({});

       
  useEffect(() => {
   
      setTimeout(() => {
        setBankData({
          returns : 100
        });
      }, 1000);
       }, []);


       useEffect(() => {
      setTimeout(() => {
        setExchaggData({
          income : 100
        })
      }, 3000);
            }, [])

  useEffect(() => {
   
      setTimeout(() => {
        setBankDatas({
          returns : 100
        });
      }, 1000);
       }, []);



        const cryptreturns =  exchaggData.returns + bankData.returns ;

       const ans = (cryptreturns + exchaggData.income) * 0.3

  return  <div> 
      






       
        <div>ans{ans}</div>

       </div>
  
}
