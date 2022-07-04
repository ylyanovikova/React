import { FC } from "react";
import { ICar } from "../../interfaces";

interface IProps{
    car: ICar
};

const Car: FC<IProps> = ({car}) => {
    const {model, price, year, id} = car;

    return (
        <div>
            <div>id : {id}</div>
            <div>model : {model}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <hr/>
        </div>
    )
};

export { Car }