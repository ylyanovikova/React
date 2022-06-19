import { urls } from "../constants";
import { axiosService } from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
};

export { carService };