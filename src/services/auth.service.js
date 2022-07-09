import { urls } from "../constants";
import { axiosService } from "./axios.service";

const authService = {
    login: (user) => axiosService.post(urls.auth, user),
    refresh: (refresh) => axiosService.post(`${urls.auth}/refresh`, { refresh })
};

export { authService }