import { CarDetails } from "../components";
import css from "./CarDetailsPage.module.css";

const CarDetailsPage = () => {
    return (
        <div className={css.carDetails}>
            <CarDetails />
        </div>
    )
};
export { CarDetailsPage }