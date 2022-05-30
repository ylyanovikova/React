import { urls } from "../constants/urls/urls";
import { axoisService } from "./axios.service";

const userService ={
    getAll: ()=> axoisService.get(urls.users),
    getById: (id)=> axoisService.get(`${urls.users}/${id}`)
};

export {userService};