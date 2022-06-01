import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { User } from "../components";
import { userService } from "../services";
import css from "./UsersPage.module.css";

const UsersPage = ()=> {

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=> setUsers(data));
    },[]);

    return(
        <div className={css.flex}>
            <div className={css.border}>
                {users.map(user=> <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};

export {UsersPage};