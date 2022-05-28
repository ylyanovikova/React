import { useNavigate } from "react-router-dom";

const Post = ({post})=>{
    const {id, title} = post;
    const navigate = useNavigate();

    return(
        <div>
            {id} {title} 
            <button onClick={()=>navigate(id.toString())}>post details</button>
            <br/>
        </div>
    )
};

export {Post};