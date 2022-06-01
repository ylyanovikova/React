import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { PostDetails } from "../components";
import { postService } from "../services";

const PostDetailsPage = ()=> {

    const {state} = useLocation();

    const [postDetails, setPostDetails] = useState(state);
    const {id} = useParams();

    useEffect(()=>{
        if(!state){
            postService.getById(id).then(({data})=> setPostDetails(data));
        } else{
            setPostDetails(state);
        }
    },[id, state]);
    

    return(
        <div>
            <div>
                {postDetails && <PostDetails post={postDetails}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};

export {PostDetailsPage};