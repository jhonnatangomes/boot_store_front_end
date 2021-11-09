import axios from 'axios';

const axiosBase = axios.create({
	baseURL: 'http://localhost:4000/',
});

const getServerStatus = () => axiosBase.get('/status');

const getAllCategories = () => axiosBase.get('/categories');

export { getServerStatus, getAllCategories };
