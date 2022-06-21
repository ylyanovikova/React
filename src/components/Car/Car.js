import { Link } from "react-router-dom";

const Car = ({ car }) => {
    const { id, model, price, year } = car;

    return (
        <div>
            <br />
            <div>{id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <Link to={`/cars${id}`} state={car}>Show details</Link>
        </div>
    )
};

export { Car };