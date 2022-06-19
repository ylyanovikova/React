import { useLocation } from "react-router-dom";

const CarDetails = () => {
    
    const {state: car} = useLocation();
    const { id, model, price, year } = car;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
};

export { CarDetails };