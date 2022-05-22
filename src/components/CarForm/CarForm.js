import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import { carService } from "../../services/";
import { carValidator } from "../../validator/carForm.validator";
import { useEffect } from "react";

const CarForm =({setNewCar, carToUpdate, setUpdatedCar, setCarToUpdate})=>{
    const {register, reset, setValue, handleSubmit, formState:{errors}}= useForm({resolver:joiResolver(carValidator), mode:"onTouched"});

    const carCreate= async(car)=>{
        if(carToUpdate){
            const {data} = await carService.updateById(carToUpdate.id, car);
            setUpdatedCar(data);
            reset();
            setCarToUpdate(null);
            
        } else{
            const {data} = await carService.create(car);
            setNewCar(data);
            reset();
        }

    }

    useEffect(()=>{
        if(carToUpdate){
            const {model, price, year} = carToUpdate;
            setValue("model", model)
            setValue("price", price)
            setValue("year", year)
        }
    },[carToUpdate]);

    const clearForm=()=>{
        reset();
    }

    return(

        <div>
            <form onSubmit={handleSubmit(carCreate)}>
                <div><label>Model: <input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}<br/></span>}
                <button>{carToUpdate ? "Update" : "Save"}</button>
                {!!carToUpdate && <button onClick={clearForm}>Clear form</button>}
            </form>
        </div>
    )
}

export {CarForm}