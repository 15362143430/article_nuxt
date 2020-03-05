import axios from 'axios';
axios.defaults.baseURL = 'http://47.100.137.31:3003/';

export function httpGet(url) {
    return axios.get(url);
}