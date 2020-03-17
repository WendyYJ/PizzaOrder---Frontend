import { SHOW_ANSWER } from '../actions/questionActions';

const initialState = {
  isShowing: true,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ANSWER:
      return {
        ...state,
        isShowing: state.isShowing !== true,
      };

    default:
      return state;
  }
};
export default questionReducer;
