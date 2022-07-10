import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi"

import { carActions } from "../../redux/slices";
import css from "./CarForm.module.css";
import { carValidator } from "../../validators";

const CarForm = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors, isValid } } = useForm({ resolver: joiResolver(carValidator), mode: "onTouched" });
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
            {errors.model && <span>{errors.model.message}</span>}
            <label>Price <input type={"text"} {...register("price")} placeholder={"Enter price"} /></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label>Year <input type={"text"} {...register("year")} placeholder={"Enter year"} /></label>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? "Update" : "Save"}</button>
        </form>
    )
};
export { CarForm }