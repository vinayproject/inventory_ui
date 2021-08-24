import axios from 'axios';

export let URL = 'http://localhost:5000/api/v1.0';
//export let URL = 'http://3.6.160.21:5000/api/v1.0';

axios.interceptors.request.use(
	function (config) {
		config.baseURL = URL;
		let token = localStorage.getItem('usr');
		config.headers = {
			Authorization: `Bearer ${token}`,
		};
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		return Promise.reject(error);
	}
);

export default axios;
