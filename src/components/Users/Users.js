import {useState, useEffect }from "react";

import { userService } from "../../services";
import {User} from "../../components";
import css from "./Users.module.css"


const Users =({setChosenUser})=>{
    
const [users, setUsers] = useState([]);

useEffect(()=>{
    userService.getAll().then(({data})=> setUsers(data))
},[]);

   return( 
    <div className={css.usersBlock}>
        <h2>USERS</h2>
        {users.map(user => <User key={user.id} user={user} setChosenUser={setChosenUser}/>)}
    
    </div>
    )
}

export {Users}