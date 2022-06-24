import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux";

const CarForm = () => {

    const { formErrors, status, carForUpdate } = useSelector((state) => state.cars);

    const { register, handleSubmit, setValue, reset } = useForm();
    const dispatch = useDispatch();

    const submit = async (newCar) => {
        if (carForUpdate) {
            dispatch(carActions.updateCar({ id: carForUpdate.id, car: newCar }));
            dispatch(carActions.setCarFotUpdate(""))
        } else {
            await dispatch(carActions.createCar({ newCar }));
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
        <form onSubmit={handleSubmit(submit)}>
            {status && <h2>{status}</h2>}
            <label>Model: <input type="text" {...register("model")} /></label><br />
            {formErrors.model && <span>{formErrors.model[0]}<br /></span>}
            <label>Price: <input type="text" {...register("price")} /></label><br />
            {formErrors.price && <span>{formErrors.price[0]}<br /></span>}
            <label>Year: <input type="text" {...register("year")} /></label><br />
            {formErrors.year && <span>{formErrors.year[0]}<br /></span>}
            <button>Save</button>
        </form>
    )
};
export { CarForm };