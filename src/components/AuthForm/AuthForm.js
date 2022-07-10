import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";

import { userService } from "../../services";
import css from "./AuthForm.module.css";
import { authActions } from "../../redux/slices";
import { authValidator } from "../../validators";

const AuthForm = () => {

    const { handleSubmit, register, reset, formState: { errors, isValid } } = useForm({ resolver: joiResolver(authValidator), mode: "onTouched" });
    const { errorMessage } = useSelector(state => state.authReducer);
    const [isLogin, setIsLogin] = useState(null);
    const { pathname, state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === "/register" ? setIsLogin(false) : setIsLogin(true)
    }, [pathname]);

    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.create(user);
                navigate('/login');
            }
            if (isLogin && !errorMessage) {
                await dispatch(authActions.getTokens({ user }));
                navigate(state?.pathname || "/", { replace: true });

            }
        } catch (e) {
            console.log(e);
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.AuthForm}>
                <label>Username: <input type={"text"} {...register("username")} placeholder={"Enter username"} /></label>
                {errors.username && <span>{errors.username.message}</span>}
                <label>Password: <input type={"password"} {...register("password")} placeholder={"Enter password"} /></label>
                {errors.password && <span>{errors.password.message}</span>}
                <button disabled={!isValid}>{isLogin ? "Login" : "Register"}</button>
                {isLogin && errorMessage && <span>{"Wrong login or password"}</span>}
            </form>
        </div>
    )
};
export { AuthForm }