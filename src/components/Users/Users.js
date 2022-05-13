import {useState, useEffect }from "react";

import { userService } from "../../services";
import {User} from "../../components";


const Users =({setChosenUser})=>{
    
const [users, setUsers] = useState([]);

useEffect(()=>{
    userService.getAll().then(({data})=> setUsers(data))
},[]);


   return( 
    <div>
        {users.map(user => <User key={user.id} user={user} setChosenUser={setChosenUser}/>)}
    
    </div>
    )
}

export {Users}