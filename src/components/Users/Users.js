import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import FetchServise from "../../services/fetch.service";
import { User } from "../../components";

const Users= ()=>{
    const usersAPI = new FetchServise("users");
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        usersAPI.getAll().then(value=> setUsers(value));
    },[])
    return(
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
            <hr/>
            <Outlet/>
        </div>
        
    )
};

export {Users};
