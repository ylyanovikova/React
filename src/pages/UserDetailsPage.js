import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { UserDetails } from "../components";
import { userService } from "../services";

const UserDetailsPage = ()=> {
    const {state} = useLocation();
    const [userDetails, setUserDetails] = useState(state);

    const {id} = useParams();
    useEffect(()=>{
        if(!state){
            userService.getById(id).then(({data})=> setUserDetails(data));
        } else{
            setUserDetails(state);
        }
    },[id, state]);

    return(
        <div>
            <div>
                {userDetails && <UserDetails user={userDetails}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};

export {UserDetailsPage};