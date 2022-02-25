import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shortBreak: false
};


export const ActionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHORT_BREAK:
      return {
        ...state,
        shortBreak: true
      };
    default:
      return state;
  }
};

