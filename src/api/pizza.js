import {get} from './axios';
import queryString from 'query-string';

const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';

export const fetchPizza = (page=1,pageSize=10) => {

    const stringified = queryString.stringify({
        pageSize,
     
        page,
    });
    const url = `/pizza?${stringified}`;
    return get(url).then(res =>({
        pizzas:res.data.data.map(pizza=>({...pizza,})
    ),
    pagination:res.data.pagination,
    }));
        
   
}; 