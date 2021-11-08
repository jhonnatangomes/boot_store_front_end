import axios from "axios";

const axiosBase = axios.create({
    baseURL: "http://localhost:4000/",
});

const getServerStatus = () => axiosBase.get("/status");
const getProducts = (page) => axiosBase.get(`/products?page=${page}`);

export { getServerStatus, getProducts };
