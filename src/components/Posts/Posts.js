import { Post } from "../Post/Post"
import css from "./Posts.module.css"

const Posts = ({posts})=>{
    return(
        <div className={css.posts}>
            <h2>POSTS</h2>
            {posts.map(post=> <Post key={post.id} post= {post}/>)}
        </div>
    )
}
export {Posts}