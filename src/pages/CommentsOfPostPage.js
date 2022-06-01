import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CommentOfPost } from "../components";
import { commentsService } from "../services";

const CommentsOfPostPage = ()=>{
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getByPostId(id).then(({data})=> setComments(data));
    },[]);

    return(
        <div>
            {comments.map(comment=> <CommentOfPost key={comment.id} comment={comment}/>)}
        </div>
    )
};

export {CommentsOfPostPage};