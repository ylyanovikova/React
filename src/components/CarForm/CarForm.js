import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux/slices";
import css from "./CarForm.module.css";

const CarForm = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const { carForUpdate } = useSelector(state => state.carReducer);
    const dispatch = useDispatch();


    const submit = (car) => {
        if (carForUpdate) {
            dispatch(carActions.updateById({ id: carForUpdate.id, car }));
            dispatch(carActions.setCarForUpdate(null));
        } else {
            dispatch(carActions.createCar({ car }));
        }
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            const { model, price, year } = carForUpdate;
            setValue("model", model);
            setValue("price", price);
            setValue("year", year);
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(submit)} className={css.form}>
            <label>Model <input type={"text"} {...register("model")} placeholder={"Enter model"} /></label>
            <label>Price <input type={"text"} {...register("price")} placeholder={"Enter price"} /></label>
            <label>Year <input type={"text"} {...register("year")} placeholder={"Enter year"} /></label>
            <button>{carForUpdate?"Update":"Save"}</button>
        </form>
    )
};
export { CarForm }