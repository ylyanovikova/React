import axios from "axios";

import baseURL from "../constants";


const axiosSevice = axios.create({ baseURL });

export { axiosSevice };