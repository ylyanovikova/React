import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { isAuth } = useSelector(state => state.authReducer);

    if (!isAuth) {
        return <Navigate to={"/login"} state={location} />
    }
    return children
};

export { RequireAuth }