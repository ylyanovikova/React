import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

const AuthRequire=({children})=>{
    const location = useLocation();

    const {user}= useAuth();

    if(!user){
        return <Navigate to="/logIn" state={location}/>
    } else {
        return children;
    }
};

export {AuthRequire};