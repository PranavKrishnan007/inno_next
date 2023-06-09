import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const token = Cookies.get('token') ? Cookies.get('token') : process.env.API_TOKEN;
const headers = {
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${token}`,
};

const axhttp = axios.create({
	baseURL: process.env.SERVER_URL + '/api',
	headers,
});

axhttp.interceptors.request.use(async (config) => {
	return config;
});

axhttp.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	async (error) => {
		if (error.response?.data?.error) {
			if (error.response.data.error.details?.details) {
				toast.error(
					error.response.data.error.details?.details.errors[0].message + ' ' + error.response.data.error.details?.details.errors[0].path[0],
				);
				return;
			}
		}
		toast.error(error.response?.data?.error?.message);
	},
);

export { axhttp };
