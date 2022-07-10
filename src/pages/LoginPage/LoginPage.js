import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { AuthForm } from "../../components";
import css from "./LoginPage.module.css";

const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    useEffect(()=>{
        console.log("Session is ended", !!query.get("expSession"));
    },[query]);

    return (
        <div className={css.LoginPage}>
            <h1>LogIn</h1>
            <AuthForm />
            <Link to={"/register"}>Go to registration</Link>
        </div>
    )
};
export { LoginPage }