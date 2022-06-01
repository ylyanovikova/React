import { Outlet } from "react-router-dom";

import { Button } from "../components";
import css from "./MainPage.module.css"

const MainPage = ()=>{
    return(
        <div>
            <div className={css.flex}>
                <div>
                    <Button to={"users"}>USERS</Button>
                </div>
                <div>
                    <Button to={"posts"}>POSTS</Button>
                </div>
            </div>
                <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};

export {MainPage};