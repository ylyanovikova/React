import {useEffect, useState} from "react";
import User from "./User";

const  Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(value=> setUsers(value))
    }, []);

    return(
        <div>
         <h1>Users</h1>
            {users.map( user=> <User key = {user.id} user={user}/>)}
        </div>
    )
};

export default Users;