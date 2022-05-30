import axois from "axios";

import baseURL from "../constants/urls/urls";


const axoisService = axois.create({baseURL});

export {axoisService};
