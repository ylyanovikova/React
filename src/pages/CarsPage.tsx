import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Cars } from "../components";
import css from "./CarsPage.module.css";

const CarsPage: FC = () => {
    return (
        <div className={css.carsPage}>
            <Cars />
            <Outlet />
        </div>
    )
};

export { CarsPage }