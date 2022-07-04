import { FC } from "react";
import { Outlet } from "react-router-dom";

import { CarForm } from "../components";

const MainLayout: FC = () => {
    return (
        <div>
            <CarForm />
            <hr />
            <Outlet />
        </div>
    )
};

export { MainLayout }