import { urls } from "../constants";
import { axiosService } from "./axios.service";

const carService = {
    getAll: ()=> axiosService.get(urls.cars),
    getById: (id)=> axiosService.get(`${urls.cars}/${id}`),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}