import { Link } from "react-router-dom"

const Button = ({children, to, state})=>{
    return(
        <Link to={to}>
            <button>{children}</button>
        </Link>
    )
};
export {Button};