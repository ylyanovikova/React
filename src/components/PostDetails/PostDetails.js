const PostDetails = ({post})=>{
    const {id, userId, title, body} = post;

    return(
        <div>
            <div>Id: {id}</div>
            <div>Title:{title}</div>
            <div>{body}</div>
            <div>UserId: {userId}</div>
        </div>
    )
};
export {PostDetails};