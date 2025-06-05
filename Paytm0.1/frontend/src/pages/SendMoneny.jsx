export const  SendMoney = () => {
   return <div className="flex justify-center items-center h-screen   ">
      <div className=" borderh-60 w-70    bg-white rounded-xl shadow-md border-4 p-14 border-gray-200"> 
         <div className="">
      <h1 className="pb-20 text-center font-bold text-3xl" >Send Money</h1>
      <div className="h-12 w-12  rounded-full bg-green-600"></div>
      <div className="font-bold p-2">
         Amount (in Rs) </div>

      <input className=" w-full py-2  " type="number" placeholder="Enter amount"/>
       <button className="bg-green-500 w-full p-2 mt-4 rounded ">Initiate Transfer</button>
       </div>
       </div>
   </div>
}