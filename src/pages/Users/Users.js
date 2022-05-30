import {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import css from "./Users.module.css";


const Users =()=>{

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=> setUsers(data));
    },[]);

    return(
        <div className={css.mainBlock}>
            <div className={css.users}>
                <h1>USERS</h1>
                {users.map(user=> <User key={user.id} user={user}/>)}
            </div>
            <div className={css.userDetails}>
                <Outlet/>
            </div>
        </div>
    )
};
export {Users};