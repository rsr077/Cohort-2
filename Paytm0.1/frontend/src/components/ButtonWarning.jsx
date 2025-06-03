import {Link} from "react-router-dom"

export const ButtonWarning = ({label, buttonText, to}) => {

  return <div>
    {label}
    <Link to={to}/>
    {buttonText}
     </div>

}