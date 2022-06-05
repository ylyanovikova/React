import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { Post } from "../../components";
import { postService } from "../../services";
import css from "./Posts.module.css";

const Posts = ()=>{
    
    const [posts, setPosts] = useState([]);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        postService.getAll(query.get("page"), 12).then(({data})=> setPosts(data));
    }, [query]);

    const nextPage = ()=>{
        // let page = query.get('page');

        let queryObj = Object.fromEntries(query.entries());
        
        if(queryObj.page < 9){
            // setQuery({page:"1"});
            
            queryObj.page++;
        } else{
            // page = +page+1;
            // setQuery({page: page.toString()});
            
            setQuery(queryObj.page = 1) 
        }
        setQuery(queryObj);
    }

    return(
        <div className={css.postsAllContent}>
            <Outlet/>
            <div>
                <h1>POSTS</h1>
                <div className={css.postsCards}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <button onClick={()=>nextPage()}>Next page</button>
            </div>
        </div>
    )
};

export {Posts};