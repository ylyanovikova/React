const Post = ({post}) => {
    const {id, userId, title, body} = post;

    return(
        <div> 
            {id} -- {userId} -- {title} -- {body}
        </div>
    )

}
export default Post;