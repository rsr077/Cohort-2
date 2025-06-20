import { useEffect , useState ,memo, useCallback} from "react"



export const UsEffe = () => {

  const [exchaggData , setExchaggData] = useState({})
  const [exchagg2Data , setExchagg2Data] = useState({})
  const [bankData , setBankData]        = useState({})

    useEffect(() => {
   setTimeout(() => {
    setExchaggData({
       return : 100 
    }) 
   }, 1000);
    
    }, [])
    


 useEffect(() => {
   setTimeout(() => {
    setExchagg2Data({
       return : 100 
    }) 
   }, 1000);
    
    }, [])

useEffect(() => {
   setTimeout(() => {
    setBankData({
       income : 100
    }) 
   }, 1000);
    
    }, [])


     const cyptoreturnRetutns  = useCallback(()  => {
   
    return  exchaggData.return +  exchagg2Data.return;
      
     }, [exchaggData, exchagg2Data])
 

/*    const calulateddata = ( cyptoreturn + bankData.income ) * 0.3; */


return (
  <div>
    <CryptoGainsCalculator  cyptoreturnRetutns={cyptoreturnRetutns}/> 
  </div>
)
}
  const CryptoGainsCalculator  = memo(function({calculatCryptoReturns})  {
       console.log("crypto child re-rendered")
  

    return <>
    
     <div>ans{calculatCryptoReturns}</div>
    </>

    
})
