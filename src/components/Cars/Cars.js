import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices";
import { Car } from "../Car/Car";
import css from "./Car.module.css";

const Cars = () => {
    const { cars } = useSelector(state => state.carReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(carActions.getAll());
    }, [])

    return (
        <div className={css.cars}>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    )

};
export { Cars }