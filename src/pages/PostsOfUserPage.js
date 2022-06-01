import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostOfUser } from "../components";
import { postService } from "../services";
import css from "./PostsOfUserPage.module.css";

const PostsOfUserPage = ()=>{
    
    const {id} = useParams();

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getByUserId(id).then(({data})=> setPosts(data));
    },[id])
    return(
        <div className={css.postsOfUser}>
            {posts.map(post=> <PostOfUser key={post.id} post={post}/>)}
        </div>
    )
};

export {PostsOfUserPage};