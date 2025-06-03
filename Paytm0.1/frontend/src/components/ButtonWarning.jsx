import {Link} from "react-router-dom"

export const ButtonWarning = ({label, buttonText, to}) => {

  return <div >
    {label}
    <Link className="underline pointer cursor-pointer pl-1" to={to}>
    {buttonText}
    </Link>
     </div>

}