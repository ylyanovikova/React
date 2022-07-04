import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../hooks";
import { ICar } from "../../interfaces";
import { carActions } from "../../redux";

const CarForm: FC = () => {

    const { register, handleSubmit, reset, setValue } = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.createCar({ car }));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model <input type={"text"} placeholder={"Enter model"} {...register("model")} /></label>
            <label>Price <input type={"text"} placeholder={"Enter price"} {...register("price")} /></label>
            <label>Year <input type={"text"} placeholder={"Enter year"} {...register("year")} /></label>
            <button>Save</button>
        </form>
    )
};

export { CarForm }