import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import { carServise } from "../../services";
import { carValidator } from "../validators";
import { useEffect } from "react";


const CarForm = ({setNewCar, carForUpdate, setCars}) => {

    const { register, reset, handleSubmit, setValue, formState:{errors} } = useForm({resolver:joiResolver(carValidator), mode:"onTouched"});

    useEffect(()=>{
        if(carForUpdate){
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)   
        }
    }, [carForUpdate]);

    const carSubmit = async (car) => {
            if(carForUpdate){
                await carServise.updateById(carForUpdate.id, car);
                carServise.getAll().then(({data})=> setCars(data))    
            } else{
                const {data} = await carServise.create(car);
                setNewCar(data);
            }    
            reset();   
    };


    return ( 
    <div>
        <form onSubmit = {handleSubmit(carSubmit)}>
        <div><label>Model: <input type="text" {...register("model")}/></label ></div>
        {errors.model && <span>{errors.model.message}</span>}
        <div><label>Price: <input type="text" {...register("price", {valueAsNumber:true})}/></label ></div>
        {errors.price && <span>{errors.price.message}</span>}
        <div><label>Year: <input type="text" {...register("year", {valueAsNumber:true})}/></label ></div>
        {errors.year && <span>{errors.year.message}<br/></span>}
        <button> Submit form </button>
        </form>
        </div>
    )
}

export {CarForm}