import { Link } from "react-router-dom";

const Car = ({car}) => {
    const {id, model} = car;
    return(
        <div>
            <div>{id}: {model}</div>
            <button><Link to={id.toString()} state={car}>Show more</Link></button>
        </div>
    )
};

export {Car};