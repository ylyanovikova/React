import { urls } from "../constants/urls/urls";
import { axoisService } from "./axios.service";

const postService = {
    getAll: ()=> axoisService.get(urls.posts),
    getById: (id)=> axoisService.get(`${urls.posts}/${id}`)
};
export {postService};