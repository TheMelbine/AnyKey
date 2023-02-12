import axios from "axios";

export const http = axios.create({
    baseURL: "https://json-anykey.vercel.app"
})
