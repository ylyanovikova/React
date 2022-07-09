import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import css from "./AuthForm.module.css";

const AuthForm = () => {

    const { handleSubmit, register, reset, setValue } = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        pathname === "/register" ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submit = () => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.AuthForm}>
                <label>Username: <input type={"text"} {...register("username")} placeholder={"Enter username"} /></label>
                <label>Password: <input type={"password"} {...register("password")} placeholder={"Enter password"} /></label>
                <button>{isLogin ? "Login" : "Register"}</button>
            </form>
        </div>
    )
};
export { AuthForm }