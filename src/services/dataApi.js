import axios from 'axios';

const axiosBase = axios.create({
	baseURL: 'http://localhost:4000/',
});

const getServerStatus = () => axiosBase.get('/status');

const getProducts = (page = 1) => axiosBase.get(`/products?page=${page}`);

const getAllCategories = () => axiosBase.get('/categories');

const getCategoryProducts = (categoryName, page = 1) =>
	axiosBase.get(`/category/${categoryName}?page=${page}`);

export { getServerStatus, getAllCategories, getProducts, getCategoryProducts };
