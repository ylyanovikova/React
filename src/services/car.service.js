import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

const carService = {
    getAll: ()=> axiosService.get(urls.cars),
    create: (car)=> axiosService.post(urls.cars, car)
};

export { 
    carService
}