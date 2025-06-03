import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeadig } from "../components/SubHeading"

export const  Signup = () => {
   return <div className=" flex h-screen justify-center bg-slate-300  ">
    <div className="flex flex-col justify-center  ">
      <div className=" bg-white w-80 p-2 rounded-lg text-center h-max px-4 ">  
  <Heading label={"Sign up"}/>
  <SubHeadig label={"Enter your infromation to create an account"}/>
   <InputBox placeholder={"jone"} label={"FirstName"}/>
    <InputBox placeholder={"Doe"} label={"LastName"}/>
     <InputBox placeholder={"rajeev35343@gmail.com"} label={"Email"}/>
    <InputBox placeholder={"123456"} label={"Password"}/>
   
   <Button label={"Sign up"}/>
   <ButtonWarning label={"Already have an account ?"} buttonText={"Sign in "} to={"/signin"} />
    </div>
   </div>
   </div>
}