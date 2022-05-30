import { NavLink, Outlet } from "react-router-dom";

import css from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"}>Posts</NavLink>
                <NavLink to={"about"}>About</NavLink>
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>
        </div> 
    )
}
export {MainPage};