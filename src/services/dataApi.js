import axios from 'axios';

const axiosBase = axios.create({
	baseURL: 'http://localhost:8080/',
});

const getServerStatus = () => axiosBase.get('/status');

export { getServerStatus };
