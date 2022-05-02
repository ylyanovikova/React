import { useState, useEffect} from "react";
import Comment from "./Comment";

const Comments=()=>{
 const [comments, setComments] = useState([]);

 useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/comments")
     .then(response=> response.json())
     .then(value=> setComments(value))
 }, []);

 return(
     <div>
         <h1>Comments</h1>
         {comments.map(comment => <Comment key= {comment.id} comment={comment} />)}
     </div>
 )
}

export default Comments;