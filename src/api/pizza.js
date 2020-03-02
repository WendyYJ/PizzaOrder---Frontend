import {get} from './axios';

const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';

export const fetchPizza = () => {
    const url = '/pizza';

    return get(url).then(res => res.data.data);
}; 