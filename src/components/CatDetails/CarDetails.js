import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { carActions } from "../../redux";

const CarDetails = () => {

    const { state: car } = useLocation();
    const { id, model, price, year } = car;
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const deleteCar = (id) => {
        dispatch(carActions.deleteCar({ carId: id }));
        navigate("/cars");
    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    )
};

export { CarDetails };