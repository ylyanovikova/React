import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { carActions } from "../../redux";

const CarForm = () => {

    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = async (newCar) => {
        const data = await dispatch(carActions.create({ car: newCar }));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type='text' {...register("model")} /></label>
            <label>Price: <input type='text' {...register("price")} /></label>
            <label>Year: <input type='text' {...register("year")} /></label>
            <button>Save</button>
        </form>
    )
};

export {CarForm};