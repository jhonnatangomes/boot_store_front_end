import axios from 'axios';

const axiosBase = axios.create({
	baseURL: 'https://boot-store.herokuapp.com/',
});

const getServerStatus = () => axiosBase.get('/status');
const getProducts = (page = 1) => axiosBase.get(`/products?page=${page}`);

const getAllCategories = () => axiosBase.get('/categories');

export { getServerStatus, getAllCategories, getProducts };
