import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Cars } from "../components";

const CarsPage: FC = () => {
    return (
        <div style={{display:"flex"}}>
            <Cars />
            <Outlet />
        </div>
    )
};

export { CarsPage }