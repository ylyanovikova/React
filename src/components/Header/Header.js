import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../redux/slices";

import css from "./Header.module.css";

const Header = () => {
    const { isAuth } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const logOut = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        dispatch(authActions.logOut());
    }
    return (
        <div className={css.Header}>
            <NavLink to={"home"}>Home</NavLink>
            <NavLink to={"cars"}>Cars</NavLink>
            <NavLink to={"about"}>About</NavLink>
            {isAuth ? <button onClick={logOut}>Log Out</button> : <NavLink to={"login"}>LogIn</NavLink>}
        </div>
    )
};

export { Header }