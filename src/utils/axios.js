import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.PROD
        ? ''
        : 'http://localhost:4000'
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        if (error.response.data === 'jwt expired') {
            window.location.reload();
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;