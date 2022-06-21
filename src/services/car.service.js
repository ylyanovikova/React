import { urls } from "../constants";
import { axiosService } from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    deleteById: (carId) => axiosService.delete(`${urls.cars}/${carId}`),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar)
};

export { carService };