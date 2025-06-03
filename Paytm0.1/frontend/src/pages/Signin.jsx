import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeadig } from "../components/SubHeading"

export const  Signin = () => {
   return <div className="h-full flex justify-center bg-slate-300 ">
    <div className="flex flex-col justify-center  ">
      <div className="text-center bg-white w-80 p-2 ">  
  <Heading label={"Signin"}/>
  <SubHeadig label={"Enter your infromation to create an account"}/>
   <InputBox placeholder={"jone"} label={"FirstName"}/>
    <InputBox placeholder={"Doe"} label={"LastName"}/>
     <InputBox placeholder={"rajeev35343@gmail.com"} label={"FirstName"}/>
    <InputBox placeholder={"123456"} label={"Password"}/>
   
   <Button label={"Sign up"}/>
   <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
    </div>
   </div>
   </div>
}