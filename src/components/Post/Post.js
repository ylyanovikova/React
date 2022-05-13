const Post = ({post})=>{
const {id, title, body} = post;

return(
    <div>
        {id} 
        <h2>{title}</h2> 
        <p>{body}</p>
        <hr></hr>
    </div>
)
}
export {Post}