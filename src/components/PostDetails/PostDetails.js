import { Button } from "../Button/Button";
import css from "./PostDetails.module.css";

const PostDetails = ({post})=>{
    const {id, userId, title, body} = post;
    return(
        <div className={css.postDetails}>
            <div>Id: {id} {title}</div>
            <div>{body}</div>
            <div>User id:{userId}</div>
            <Button to={`comments-of-post=${id}`}>Show comments</Button>
        </div>
    )
};
export {PostDetails};