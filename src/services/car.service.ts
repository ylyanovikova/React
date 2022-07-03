import { urls } from "../constants/urls";
import { ICar } from "../interfaces";
import { axiosService, Res } from "./axios.service";

const carService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (newCar: ICar): Res<ICar> => axiosService.post(urls.cars, newCar),
    updateById: (id: string, car: ICar): Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: string): Res<void> => axiosService.delete(`${urls.cars}/${id}`)
};

export { carService };
