import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom";


import { useAuth } from "../../hooks/useAuth";
import css from "./LogInPage.module.css";

const LogInPage = ()=>{

    const {logIn} = useAuth();
    const name = useRef();
    const {state} = useLocation();
    const navigate = useNavigate();

    const login = ()=>{
        const userName = name.current.value;
        logIn(userName, ()=>navigate(state.pathname, {replace: true}))
        

    }

    return(
        <div className={css.logIn}>
            <h2>LOG IN</h2>
            <input type={"text"} ref={name} placeholder={"Enter your name"}></input>
            <button onClick={()=>login()}>logIn</button>
        </div>
    )
};

export {LogInPage};