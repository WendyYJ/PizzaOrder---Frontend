import { fetchStates,fetchCities } from '../../api/state';

export const FETCH_STATE_SUCCESS ='FETCH_STATE_SUCCESS';
export const FETCH_CITY_SUCCESS ='FETCH_CITY_SUCCESS';
export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_STATE = 'FETCH_STATE';

export const fetchStateSuccess = () => ({
    type:FETCH_STATE_SUCCESS,

});

export const fetchCitySuccess = state => ({
    type:FETCH_STATE_SUCCESS,
    state
})

export const fetchState = () => ({
    type:FETCH_STATE,
})

export const fetchCity = () =>({
    type:FETCH_CITY,
})

export const fetchStateFailure = errorMessage => ({
    type:FETCH_STATE_FAILURE,
    errorMessage,
});

export const fetchCityFailture = errorMessage => ({
    type:FETCH_CITY_FAILURE,
    errorMessage,
});

export const loadState = () => dispatch => {
    dispatch(fetchState);
    fetchStates.then(data => {
        dispatch(fetchStateSuccess(data));
    }).catch(error => {
        dispatch(fetchStateFailure(error.message));
    });
}

export const loadCity = state => dispatch => {
    dispatch(fetchCity);
    fetchCities(state).then(data => {
        dispatch(fetchCitySuccess(data));
    }).catch(error => {
        dispatch(fetchCityFailure(error.message));
    });
}