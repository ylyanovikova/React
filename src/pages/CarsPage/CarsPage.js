import { CarForm } from "../../components";
import { Cars } from "../../components/Cars/Cars";

const CarsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <CarForm />
            </div>
            <div>
                <Cars />
            </div>
        </div>
    )
};
export { CarsPage }