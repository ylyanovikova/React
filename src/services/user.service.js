import { urls } from "../constants";
import { axiosService } from "./axios.service";

const userService = {
    create: (user) => axiosService.post(urls.users, user)
};
export { userService }