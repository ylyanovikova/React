import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Post } from "../components";
import { postService } from "../services";
import css from "./PostPage.module.css";

const PostsPage = ()=> {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(({data})=> setPosts(data));
    }, []);
    return(
        <div className={css.flex}>
            <div>
                {posts.map(post=> <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};

export {PostsPage};