import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import {Users} from "../components/Users"
export const  Dashboard = () => {
   return <>
   <Appbar/>
   <Balance value={"10,000"}/>
   <Users/>
   </>
}