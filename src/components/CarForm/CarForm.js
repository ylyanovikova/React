import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices/car.slice";

const CarForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const { formErrors } = useSelector(state => state.cars);

    const dispatch = useDispatch();
    const submit = async (newCar) => {
        await dispatch(carActions.createCar({ car: newCar }));
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register("model")} placeholder={"Enter model"} /></label>
            <label>Price: <input type="text" {...register("price")} placeholder={"Enter price"} /></label>
            <label>Year: <input type="text" {...register("year")} placeholder={"Enter year"} /></label>
            <button>Save</button>
        </form>
    )
};

export { CarForm }