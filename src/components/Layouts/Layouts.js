import { Link, Outlet } from "react-router-dom";

const Layouts = ()=>{
    return(
        <div>
            <ol>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"posts"}>Posts</Link></li>
                <li><Link to={"comments"}>Comments</Link></li>
            </ol>
            <Outlet/>
        </div>
    )
};

export {Layouts};