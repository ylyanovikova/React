import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { userService } from "../../services";
import { UserDetails } from "../../components";

const UserDetailsPage = ()=>{

    const {state} = useLocation();
    const [userDetails, setUserDetails] = useState(state);

    const {id} = useParams();
    useEffect(()=>{
        if(!state){
            userService.getById(id).then(({data})=> setUserDetails(data));
        } else{
            setUserDetails(state);
        }
    },[id, state])
    return(
        <div>
            <h1>USERS DETAILS</h1>
            {userDetails && <UserDetails user={userDetails}/>}
        </div>
    )
};

export {UserDetailsPage};