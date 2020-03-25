import { get } from './axios';

const API_STATE_URL = '/state';

export const fetchStates = () => {
    const url = `${API_STATE_URL}`;
    return get(url).then((res) => res.data.data);
};

export const fetchCities = state => {
    const url = `${API_STATE_URL}/${state}`;
    return get(url).then((res) => res.data.data);
};


