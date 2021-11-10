import axios from 'axios';

const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const getServerStatus = () => axiosBase.get('/status');
const getProducts = (page = 1) => axiosBase.get(`/products?page=${page}`);

const getProductInfo = (uuid) => axiosBase.get(`/products/${uuid}`);

const getAllCategories = () => axiosBase.get('/categories');

export { getServerStatus, getAllCategories, getProducts, getProductInfo };
