import { useDispatch } from "react-redux";
import { carActions } from "../../redux/slices";

const Car = ({ car }) => {
    const { id, model, price, year } = car;

    const dispatch = useDispatch();

    const deleteById = (id) => {
        dispatch(carActions.deleteById({ id }));
    };

    const update = (car) => {
        dispatch(carActions.setCarForUpdate(car));
    };

    return (
        <div>
            <div>{id} : {model}</div>
            <div>Price : {price}</div>
            <div>Year : {year}</div>
            <button onClick={() => update(car)}>Update</button>
            <button onClick={() => deleteById(id)}>Delete</button>
        </div>
    )
};
export { Car }