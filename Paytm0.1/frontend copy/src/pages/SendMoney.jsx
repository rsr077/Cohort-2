import axios from "axios"
import { useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const  SendMoney = () => {

  const [searchParams] = useSearchParams();
const id = searchParams.get("id");

    const name = searchParams.get("name");

    const [amount, setAmount] = useState(0);

      const firstLetter = name ? name[0].toUpperCase() : "";


   return <div className="flex justify-center items-center h-screen   ">
      <div className=" borderh-60 w-70    bg-white rounded-xl shadow-md border-4 p-14 border-gray-200"> 
        
         <div className="">
        
      <h1 className="pb-20 text-center font-bold text-3xl" >Send Money</h1>

      <div className="h-12 w-12 py-3 px-5 rounded-full bg-green-600 font-bold ">{firstLetter}</div>
        <h3 className="text-2xl font-semibold">{name}</h3>
      <div className="font-bold p-2">
         Amount (in Rs) </div>

      <input onChange={(e) => {setAmount(Number(e.target.value))}} className=" w-full py-2  " type="number" placeholder="Enter amount"/>

       <button   onClick={() => {
                                 console.log("Full URL Search Params:", searchParams.toString());
                                      console.log("User ID from URL:", id);

                                              
                                                console.log("Sending to:", id, "amount:", amount);
                                    axios.post("https://paytm-backend-tawny.vercel.app/api/v1/account/transfer", {
                                        to: id,
                                        amount
                                       

                                    }, {
                                        headers: {
                                            Authorization: "Bearer " + localStorage.getItem("token")
                                           
                                        }
                                    }).then(() => {
                                        toast.success("✅ Money sent successfully!");
                                         console.log("token")
                                    }).catch(err => {
                                         toast.error("Failed Transfer" + (err.response?.data?.message || err.message));
                                    });
                                }} className="bg-green-500 w-full p-2 mt-4 rounded ">Initiate Transfer</button>
       </div>
       </div>
   </div>
}