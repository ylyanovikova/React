import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import FetchServise from "../../services/fetch.service";
import { Post } from "../../components";

const Posts = ()=>{

    const [posts, setPosts] = useState([]);
    const postAPI = new FetchServise("posts");
    useEffect(()=>{
        postAPI.getAll().then(value => setPosts(value));
    }, [])
    return(
        
        <div>
            <Outlet/>
            <hr/>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    )
};

export {Posts};