import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import css from "./MainPage.module.css";

const MainPage = () => {
    const navigate = useNavigate();

    const {user, logOut} = useAuth();

    return (
        <div>
            <div className={css.header}>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"}>Posts</NavLink>
                <NavLink to={"about"}>About</NavLink>
                {user && <div className={css.logOut}><b>{user}</b><button onClick={()=>logOut(()=> navigate('/'))}>log out</button></div>}
            </div>
            <div className={css.navButtons}>
                <button onClick={()=>{navigate(-1)}}>Previous page</button>
                <button onClick={()=>{navigate(1)}}>Next page</button>
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>
        </div> 
    )
}
export {MainPage};