import { FC } from "react";
import { Link } from "react-router-dom";

import { ICar } from "../../interfaces";

interface IProps {
    car: ICar
};

const Car: FC<IProps> = ({ car }) => {
    const { model, price, year, id } = car;

    return (
        <div>
            <div>id : {id}</div>
            <div>model : {model}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <Link to={`${id?.toString()}`} state={car}>show details</Link>
            <hr />
        </div>
    )
};

export { Car }