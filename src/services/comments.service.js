import { urls } from "../constants/urls";
import { axiosService } from "./axios.sercice";


const commentsService = {
    getByPostId: (postId)=> axiosService.get(`${urls.comments}?postId=${postId}`)
};

export {commentsService};