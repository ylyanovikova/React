import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices/car.slice";
import { Car } from "../Car/Car";

const Cars = () => {
    const { cars, updatedCar } = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch, updatedCar]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    )
};

export { Cars }