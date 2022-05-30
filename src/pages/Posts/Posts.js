import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Post } from "../../components";
import { postService } from "../../services";
import css from "./Posts.module.css";

const Posts = ()=>{
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(({data})=> setPosts(data));
    }, []);

    return(
        <div className={css.postsAllContent}>
            <Outlet/>
            <div>
                <h1>POSTS</h1>
                <div className={css.postsCards}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
            </div>
        </div>
    )
};

export {Posts};