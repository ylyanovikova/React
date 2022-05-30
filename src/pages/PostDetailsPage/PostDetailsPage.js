import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { PostDetails } from "../../components";
import { postService } from "../../services";
import css from "./PostDetailsPage.module.css";

const PostDetailsPage = ()=>{

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
        
        <div className={css.postDetails}>
            <h2>POST DETAILS</h2>
           {postDetails && <PostDetails post={postDetails}/>}
        </div>
    )
};
export {PostDetailsPage};