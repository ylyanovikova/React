import { urls } from "../constants";
import { axiosService } from "./axios.service";

const episodesService = {
    getAll: (page = 1) => axiosService.get(urls.episode, {
        params: {
            page
        }
    })
};

export { episodesService };