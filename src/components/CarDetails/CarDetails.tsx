import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { ICar } from "../../interfaces";
import { carActions } from "../../redux";
import { carService } from "../../services";

const CarDetails: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<ICar | null>(null);
    const {state} = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(state){
            setCar(state as ICar)
        }else{
            carService.getById(id as string).then(response => response.data).then(car => setCar(car))
        }
    }, [id, state]);

    const deleteCar = ()=>{
        dispatch(carActions.deleteById({id:`${id}`}))
        navigate("/");
    }


    return (
        <div>
            {
                car && <div>
                    <div>id : {id}</div>
                    <div>model : {car.model}</div>
                    <div>price : {car.price}</div>
                    <div>year : {car.year}</div>
                    <button>Update</button>
                    <button onClick={()=>deleteCar()} >Delete</button>
                </div>
            }
        </div>
    )
};

export { CarDetails }