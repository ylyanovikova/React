import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom";


import { useAuth } from "../../hooks/useAuth";

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
        <div>
            <input type={"text"} ref={name} placeholder={"name"}></input>
            <button onClick={()=>login()}>logIn</button>
        </div>
    )
};

export {LogInPage};