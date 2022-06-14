import { useDispatch } from "react-redux";
import { userActions } from "../redux/slices";

const User =({user})=>{

    const dispatch = useDispatch();
    return(
        <div>
            {user.id}- {user.name}
            <button onClick={()=> dispatch(userActions.deleteById(user.id))}>Delete</button>
        </div>
    )
};
export {User}