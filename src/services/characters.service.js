import { urls } from "../constants";
import { axiosService } from "./axios.service";

const charactersService = {
    getByCharactersList: (characters) => {
        const ids = characters.map(item=> item.split("/").slice(-1)[0]);
        const idsArr = ids.join(",");
        return axiosService.get(`${urls.character}/${idsArr}`);
    }
};

export { charactersService};