import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios"
import {useNavigate} from "react-router-dom"


export const Users=() => {

 const [users, setUsers] = useState([]);
 const [filter ,setFilter] = useState("");

 useEffect(() => {
   axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)

   .then(response => {
    setUsers(response.data.user)
   })

 }, [filter])
 
  return <div className="pl-10"> 
   <div className="font-bold text-lg ">Users</div>

   <input onChange={(e) => {
     setFilter(e.target.value)
   }} className="w-full border rounded px-2 py-2" type="text" placeholder="Search users"/>

   <div> 
    {users.map (user => <User user={user}/> )}
   </div>
   </div>
} 

function User({user}) {

    const navigate = useNavigate();
     return<div className="flex justify-between mt-6 
">

        <div className="flex "> 
        <div className="bg-slate-200 h-12 w-12 rounded-full  py-2 px-3  justify-center text-md 
   ">
    <div className="flex flex-col  justify-center  h-full text-xl"> 
    {user.firstName[0]}</div>
   </div>
        <div className="pl-4 pt-1 text-lg">{user.firstName} {user.lastName}</div>
        </div>
        <div className="flex flex-col justify-center h-ful">  

       <Button onClick={() => {
          console.log("Navigating with:", user);
    navigate(`/send?id=${user._id}&name=${user.firstName}`);
       }} label={"Send Money"}/>
     </div>
     </div>
  
}