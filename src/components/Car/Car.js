import { Link } from "react-router-dom";

const Car = ({ car }) => {
    const { model, price, year } = car;
    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <Link to={"/carDetails"} state={car}>Show details</Link>
            <br/>
        </div>
    )
};

export { Car };