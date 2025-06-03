import { SubHeading } from "../../../../Paytm/frontend/src/components/SubHeading"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const Signin= () => {
   return <div className="flex justify-center bg-slate-300 h-screen   ">
      <div className=" flex flex-col justify-center">
         <div className="bg-white text-center p-2 rounded-lg h-max px-4 w-80">
       <Heading label={"Sign in"}/>
       <SubHeading label={"Enter the credentials to access your account"}/>
       <InputBox placeholder={"rajeev234@gmail.com"} label={"Email"}/>
       <InputBox placeholder={"1234567"} label={"Password"}/>
       <Button label={"Sign in"}/>
      <ButtonWarning  label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}  />
         </div>
      </div>
   </div>
}