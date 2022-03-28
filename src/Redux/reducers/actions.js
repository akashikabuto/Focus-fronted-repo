import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shortBreak: false,
  count: 0,
  allTasks: [],
  Authorization: true
};


export const ActionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHORT_BREAK:
      return {
        ...state,
        shortBreak: true
      };
    case actionTypes.BACK_TO_PMODORO:
      return {
        ...state,
        shortBreak: false
      };
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        count: payload
      };
    case actionTypes.LONG_BREAK:
      return {
        ...state,
        shortBreak: false
      };
    case actionTypes.FROM_LONG_BREAK:
      return {
        ...state,
        shortBreak: false,
        count: 0
      };
    case actionTypes.ALL_TASKS:
      return {
        ...state,
        allTasks: payload
      };
    case actionTypes.NO_AUTH:
      return {
        ...state,
        Authorization: false
      };
    default:
      return state;
  }
};

