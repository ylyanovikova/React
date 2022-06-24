import { urls } from "../constants";
import { axiosService  } from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar)
};

export { carService };