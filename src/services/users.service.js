import { urls } from "../constants/urls";
import { axiosService } from "./axios.sercice";


const userService = {
    getAll: ()=> axiosService.get(urls.users),
    getById: (id)=> axiosService.get(`${urls.users}/${id}`)
};

export {userService};