import css from "./Post.module.css"

const Post = ({post})=>{
const {id, title, body} = post;

return(
    <div className= {css.post}>
        {id} 
        <h4>{title}</h4> 
        <p>{body}</p>
    </div>
)
}
export {Post}