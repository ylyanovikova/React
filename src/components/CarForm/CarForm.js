import { useEffect} from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux";

const CarForm = () => {
    const { register, reset, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();

    const { formErrors, carForUpdate} = useSelector(state => state.cars);

    const submit = async (newCar) => {
        if(carForUpdate){
            await dispatch(carActions.updateCar({car: newCar, carForUpdate}));
            await dispatch(carActions.carForUpdate({carForUpdate: ''}));

        }else{
            await dispatch(carActions.createCar({ car: newCar}));
        }
        reset();
    };

    useEffect(()=>{
        if(carForUpdate){
            const {model, price, year} = carForUpdate;
            setValue("model", model);
            setValue("price", price);
            setValue("year", year);
        }
    },[carForUpdate, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register("model")} placeholder={"Enter model"} /></label><br/>
            {formErrors.model && <span>{formErrors.model[0]}<br/></span>}
            <label>Price: <input type="text" {...register("price")} placeholder={"Enter price"} /></label><br/>
            {formErrors.price && <span>{formErrors.price[0]}<br/></span>}
            <label>Year: <input type="text" {...register("year")} placeholder={"Enter year"} /></label><br/>
            {formErrors.year && <span>{formErrors.year[0]}<br/></span>}
            <button>Save</button>
        </form>
    )
};

export { CarForm }