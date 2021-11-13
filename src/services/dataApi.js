import axios from 'axios';
import { headersConfig } from '../helpers/helpers';

const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const getServerStatus = () => axiosBase.get('/status');

const getProducts = (page = 1) => axiosBase.get(`/products?page=${page}`);

const getAllCategories = () => axiosBase.get('/categories');

const getCategoryProducts = (categoryName, page = 1) =>
    axiosBase.get(`/category/${categoryName}?page=${page}`);

const postSignUp = (requestBody) => axiosBase.post('/sign-up', requestBody);

const postLogin = (requestBody) => axiosBase.post('/login', requestBody);

const postLogout = (requestBody) => axiosBase.post('/logout', requestBody);

const getProductInfo = (uuid) => axiosBase.get(`/products/${uuid}`);

const getCart = (token) => axiosBase.get('/cart', headersConfig(token));

const postProduct = (token, body) =>
    axiosBase.post('/cart', body, headersConfig(token));

const removeProduct = (token, uuid) =>
    axiosBase.delete(`/cart/${uuid}`, headersConfig(token));

const updateQuantity = (token, body) =>
    axiosBase.put('/cart', body, headersConfig(token));

export {
    getServerStatus,
    getAllCategories,
    getProducts,
    getCategoryProducts,
    postSignUp,
    postLogin,
    postLogout,
    getProductInfo,
    getCart,
    postProduct,
    removeProduct,
    updateQuantity,
};
