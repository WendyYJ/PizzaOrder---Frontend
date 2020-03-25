import { SHOW_FILTER } from '../actions/filterActions';

const initialState = {
  showfilter: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        showfilter: state. showfilter !== true,
      };

    default:
      return state;
  }
};
export default filterReducer;
