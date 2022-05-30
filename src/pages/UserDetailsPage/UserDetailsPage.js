import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { postService } from "../../services";
import { UserDetails } from "../../components";

const UserDetailsPage = ()=>{

    const {state} = useLocation();
    const [userDetails, setUserDetails] = useState(state);

    const {id} = useParams();
    useEffect(()=>{
        if(!state){
            postService.getById(id).then(({data})=> setUserDetails(data));
        } else{
            setUserDetails(state);
        }
    },[id, state])
    return(
        <div>
            {userDetails && <UserDetails user={userDetails}/>}
        </div>
    )
};

export {UserDetailsPage};