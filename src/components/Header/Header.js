import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"home"}>Home</NavLink>
            <NavLink to={"cars"}>Cars</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"login"}>LogIn</NavLink>
        </div>
    )
};

export { Header }