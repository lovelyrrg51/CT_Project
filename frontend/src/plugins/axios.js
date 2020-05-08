import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'

let axiosInstance  = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${localStorage.token}`;
    return config;
});

Vue.use(VueAxios, axiosInstance);
