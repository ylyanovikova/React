import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userService } from "../../services";
import css from "./AuthForm.module.css";
import { authActions } from "../../redux/slices";

const AuthForm = () => {

    const { handleSubmit, register, reset, setValue } = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const { pathname, state } = useLocation();
    const navigate= useNavigate();
    const dispatch = useDispatch();




    useEffect(() => {
        pathname === "/register" ? setIsLogin(false) : setIsLogin(true)
    }, [pathname]);

    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.create(user);
                navigate('/login');
            } else{
                await dispatch(authActions.getTokens({ user }));
                navigate(state?.pathname || "/", {replace:true});
            }
        } catch (e) {
            
        }

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