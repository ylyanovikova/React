import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { authActions } from "../../redux/slices";
import css from "./Header.module.css";

const Header = () => {
    const { isAuth, authName } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const logOut = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        dispatch(authActions.logOut());
    }
    return (
        <div className={css.Header}>
            <div className={css.HeaderMenu}>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"cars"}>Cars</NavLink>
                <NavLink to={"about"}>About</NavLink>
            </div>
            <div>
                {isAuth ? <div className={css.auth}><h2>{authName}</h2><button onClick={logOut}>Log Out</button></div> : <NavLink to={"login"}>LogIn</NavLink>}
            </div>
        </div>
    )
};

export { Header }