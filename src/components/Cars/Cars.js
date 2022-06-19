import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices/car.slice";
import { Car } from "../Car/Car";

const Cars = () => {
    const { cars, status } = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);


    return (
        <div>
            {status && <span><b>Status: {status}</b></span>}
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    )
};

export { Cars };