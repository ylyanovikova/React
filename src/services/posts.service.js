import { urls } from "../constants/urls";
import { axiosService } from "./axios.sercice";


const postService = {
    getAll: ()=> axiosService.get(urls.posts),
    getById: (id)=> axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (userId)=> axiosService.get(`${urls.posts}?userId=${userId}`)
};

export {postService};