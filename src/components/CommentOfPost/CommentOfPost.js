import css from "./CommentOfPost.module.css";

const CommentOfPost = ({comment})=>{
    const {id, postId, name, email, body} = comment;
    return(
        <div className={css.comment}>
            <div>Id: {id} {name}</div>
            <div>Email: {email}</div>
            <div>{body}</div>
            <div>Post id: {postId}</div>
        </div>
    )
};

export {
    CommentOfPost
}