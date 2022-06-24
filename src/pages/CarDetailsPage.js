import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CarDetails } from "../components";

import { carService } from "../services";

const CarDetailsPage = () => {

    const [car, setCar] = useState(null);

    const { state } = useLocation();
    const { id } = useParams();



    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            carService.getById(id).then(value => setCar(value.data));
        }
    }, []);

    return (
        <div>
            {car && <CarDetails car={car} />}
        </div>
    )
};

export { CarDetailsPage };