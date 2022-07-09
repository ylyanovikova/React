import { Link } from "react-router-dom";

import { AuthForm } from "../../components";
import css from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={css.LoginPage}>
            <h1>LogIn</h1>
            <AuthForm />
            <Link to={"/register"}>Go to registration</Link>
        </div>
    )
};
export { LoginPage }