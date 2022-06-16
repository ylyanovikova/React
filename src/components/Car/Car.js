import { carService } from "../../services";

const Car = ({ car, setDeletedCar, setCarToUpdate }) => {
    const { id, model, price, year } = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setDeletedCar(id);
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => deleteCar}>delete</button>
            <button onClick={() => setCarToUpdate(car)}>Update</button>
            <hr />
        </div>
    )
}

export { Car }