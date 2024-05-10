import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketmovie-t2cu.onrender.com"
})