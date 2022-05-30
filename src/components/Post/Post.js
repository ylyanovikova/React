import { Button } from "../../components";
import css from "./Post.module.css";

const Post = ({post})=>{
    const {id, title} = post;
    return(
        <div className={css.post}>
            Post #{id} - {title} 
            <br/>
            <Button to={id.toString()} state={post}>Post details</Button>
        </div>
    )
};
export {Post};