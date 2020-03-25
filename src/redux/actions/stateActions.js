import { fetchCities } from '../../api/state';

export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';
export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';

export const fetchCitySuccess = (data) => ({
  type: FETCH_CITY_SUCCESS,
  data,
});

export const fetchAllSuccess = () => ({
  type: FETCH_ALL_SUCCESS,
});

export const fetchCity = () => ({
  type: FETCH_CITY,
});

export const fetchCityFailture = (errorMessage) => ({
  type: FETCH_CITY_FAILURE,
  errorMessage,
});

export const loadCity = () => (dispatch) => {
  dispatch(fetchCity);
  let count = 0;
  const states = [
    'Queensland',
    'New South Wales',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia',
    'Esperance',
  ];
  const stateCity = {};
  states.map((state) => {
    const cities = [];
    count++;
    fetchCities(state)
      .then((data) => {
        data.map((d) => {
          cities.push(d.City);
          stateCity[state] = cities;
        });
      })
      .catch((error) => {
        dispatch(fetchCityFailture(error.message));
      });
    if (count == 7) {
      dispatch(fetchCitySuccess(stateCity));
    }
  });
};
