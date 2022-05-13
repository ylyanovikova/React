import { axiosService } from "./axios.service";
import { urls } from "../constants";

const postsService = {
    getByUsersId: (userId)=> axiosService.get(`${urls.posts}?userId=${userId}`)
}

export {postsService}