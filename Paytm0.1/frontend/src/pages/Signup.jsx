import { Heading } from "../components/Heading";
import { SubHeadig } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";

export const Signup = () => {
  return (
    <div>
      <Heading label={"Sign up"} />
      <SubHeadig label={"Enter your information to create an account"} />
      <InputBox placeholder={"John"} label={"FirstName"} />
      <InputBox placeholder={"Doe"} label={"LastName"} />
      <InputBox placeholder={"rajeev2432@gmail.com"} label={"Email"} />
      <InputBox placeholder={"123456"} label={"Password"} />
      <Button label={"Sign up"} />
      <ButtonWarning label={"Already have an account"} buttonText={"Sign up"} to={"/signup"} />
    </div>
  );
};
