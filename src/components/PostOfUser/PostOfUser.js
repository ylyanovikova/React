const PostOfUser = ({post})=>{
    const {id, userId, title} = post;

    return(
        <div>
           <div>Id: {id}- {title}</div>
           <div>UserId: {userId}</div>
        </div>
    )
};
export {PostOfUser};