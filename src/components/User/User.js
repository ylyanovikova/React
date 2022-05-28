import { Link} from "react-router-dom";

const User = ({user})=>{

    const {id, name} = user;
    
    return(
        <div>
            {id} {name} <Link to={id.toString()} state={{...user}}>Details</Link>
        </div>

    )
};

export {User};