import { Link } from "react-router-dom";

import css from "./Button.module.css";

const Button = ({children, to, state})=>{
    return(
        <Link to={to} state={state}>
            <button className={css.btn}>{children}</button>
        </Link>    
    )
};
export {Button};