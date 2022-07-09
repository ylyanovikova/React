import { urls } from "../constants";
import { axiosService } from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    deleteById: (carId) => axiosService.delete(`${urls.cars}/${carId}`),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car)
};

export { carService }