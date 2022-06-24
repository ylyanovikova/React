import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux";
import { Car } from "../Car/Car";

const Cars = () => {
    const { cars } = useSelector(({ cars }) => cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    )
};

export { Cars };