import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { carActions } from "../../redux";

const CarDetails = ({ car }) => {
    const { id, model, price, year } = car;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteCar = (carId) => {
        dispatch(carActions.deleteCar({ carId }));
        navigate("/cars");
    };

    const updateCar = () => {
        dispatch(carActions.setCarFotUpdate(car));
        navigate("/cars");
    };

    return (
        <div>
            <div>Id: {id}</div>
            <div>Mpodel: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={updateCar}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    )
};
export { CarDetails };