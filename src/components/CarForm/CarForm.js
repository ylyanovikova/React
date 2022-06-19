import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { carActions } from "../../redux";

const CarForm = () => {

    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const { formErrors } = useSelector(state => state.cars);

    const submit = async (newCar) => {
        await dispatch(carActions.create({ car: newCar }));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type='text' {...register("model")} /></label><br />
            {formErrors.model && <span>{formErrors.model[0]}<br /></span>}
            <label>Price: <input type='text' {...register("price")} /></label><br />
            {formErrors.price && <span>{formErrors.price[0]}<br /></span>}
            <label>Year: <input type='text' {...register("year")} /></label><br />
            {formErrors.year && <span>{formErrors.year[0]}<br /></span>}
            <button>Save</button>
        </form>
    )
};

export { CarForm };