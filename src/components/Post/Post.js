import { Button } from "../Button/Button";
import css from "./Post.module.css";

const Post = ({post})=>{
    const {id, title} = post;

    return(
        <div className={css.post}>
           <div>Id: {id}- {title}</div>
           <Button to={id.toString()} state={post}>Show post details</Button>
        </div>
    )
};
export {Post};