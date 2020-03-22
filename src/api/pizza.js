import queryString from 'query-string';
import { get } from './axios';

const API_PIZZA_URL = '/pizza';
const API_INGREDIENT_URL = '/ingredient';
export const fetchPizza = (page = 1, pageSize = 10) => {
  const stringified = queryString.stringify({
    pageSize,
    page,
  });

  const url = `${API_PIZZA_URL}?${stringified}`;
  return get(url).then((res) => ({
    pizzas: res.data.data.map((pizza) => ({ ...pizza })),
    pagination: res.data.pagination,
  }));
};

export const fetchPizzaById = (pizzaId) => {
  const url = `${API_PIZZA_URL}/${pizzaId}`;
  return get(url).then((res) => res.data.data);
};

export const fetchMeats = () => {
  const url = `${API_INGREDIENT_URL}/MEATS`;
  return get(url).then((res) => res.data.data);
};

export const fetchSauces = () => {
  const url = `${API_INGREDIENT_URL}/SAUCES`;
  return get(url).then((res) => res.data.data);
};

export const fetchVeggies = () => {
  const url = `${API_INGREDIENT_URL}/VEGGIGS`;
  return get(url).then((res) => res.data.data);
};

export const fetchCheeses = () => {
  const url = `${API_INGREDIENT_URL}/CHEESES`;
  return get(url).then((res) => res.data.data);
};
