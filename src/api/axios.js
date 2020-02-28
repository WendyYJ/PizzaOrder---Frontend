import axios from 'axios';


axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';


export const get = (url) =>
    axios.get(url);


