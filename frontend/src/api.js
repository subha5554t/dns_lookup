import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api' });

export const lookup = (domain) => API.get(`/lookup?domain=${encodeURIComponent(domain)}`);
export const history = () => API.get('/history');
export default API;
