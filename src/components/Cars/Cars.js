import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices";
import { Car } from "../Car/Car";
import css from "./Cars.module.css";

const Cars = () => {
    const { cars } = useSelector(state => state.carReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    let carsLength = false;

    if (cars.length >= 0) {
        carsLength = true;
    }

    return (
        <div className={css}>
            <h1>{carsLength ? "CARS" : "Create a car"}</h1>

            <div className={css.cars}>
                {cars.map(car => <Car key={car.id} car={car} />)}
            </div>
        </div>
    )

};
export { Cars }