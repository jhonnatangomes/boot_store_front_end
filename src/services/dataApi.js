import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const getServerStatus = () => axiosBase.get('/status');

const getProducts = (page = 1) => axiosBase.get(`/products?page=${page}`);

const getAllCategories = () => axiosBase.get('/categories');

const getCategoryProducts = (categoryName, page = 1) =>
	axiosBase.get(`/category/${categoryName}?page=${page}`);

const postSignUp = requestBody => axiosBase.post('/sign-up', requestBody);

export {
	getServerStatus,
	getAllCategories,
	getProducts,
	getCategoryProducts,
	postSignUp,
};
