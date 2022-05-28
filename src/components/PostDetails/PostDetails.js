import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FetchServise from "../../services/fetch.service";

const PostDetails = ()=>{

    
     const [postDetails, setPostDetails] = useState({});
     const postDetailsAPI = new FetchServise("posts");
     let {id} = useParams();

    useEffect(()=>{
        postDetailsAPI.getbyId(id).then(value => setPostDetails(value))
    },[id]);


    return(
        <div>
            <hr/>
            Post Details
            <h3>{postDetails.id} {postDetails.title}</h3>
            <div>{postDetails.body}</div>
            <p>User id: {postDetails.userId}</p>
        </div>
    )
};

export {PostDetails};