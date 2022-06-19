import { Outlet} from "react-router-dom";
import { CarForm } from "../components/CarForm/CarForm";


const HomePage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    )
};

export { HomePage }; 