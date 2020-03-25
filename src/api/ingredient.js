import queryString from 'query-string';
import { get } from './axios';

const API_INGREDIENT_URL = '/ingredient';

export const fetchIngredients = (ingredient) => {
  const url = `${API_INGREDIENT_URL}/${ingredient}`;
  return get(url).then((res) => res.data.data);
};
