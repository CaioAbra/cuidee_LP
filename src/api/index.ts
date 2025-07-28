import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    headers:{
        "api_key": "MSmUE93TWA7abhn0MSmUE93TWA7abhn0MSmUE93TWA7abhn0MSmUE93TWA7abhn0"
    }
})


export default instance;