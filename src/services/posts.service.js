import { urls } from "../constants/urls/urls";
import { axoisService } from "./axios.service";

const postService = {
    getAll: (page, limit=5)=> axoisService.get(urls.posts, {params:{
        _start: (page-1)* limit,
        _limit: limit
    }
}),
    getById: (id)=> axoisService.get(`${urls.posts}/${id}`)
};
export {postService};