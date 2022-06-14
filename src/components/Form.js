import {useRef} from "react";
import {useDispatch} from "react-redux";
import { userActions } from "../redux/slices";

const Form = ()=>{

    const userName = useRef();
    const dispatch = useDispatch()

    return(
        <div>
            <input type="text" placeholder={"name"} ref={userName}></input>
            <button onClick={()=> dispatch(userActions.createUser({user: userName.current.value}))}>Add</button>
        </div>
    )
};

export { Form}