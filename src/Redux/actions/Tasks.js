import * as actionTypes from '../actions/actionTypes';


export const switchToBreak = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.SHORT_BREAK
  });
};

export const increaseCounter = () => async (dispatch, getState) => {
  const { tasks } = getState();
  let count = tasks.count;
  return dispatch({
    type: actionTypes.ADD_COUNTER,
    payload: count + 1
  });
};

export const switchToPomodoro = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.BACK_TO_PMODORO
  });
};

export const switchToLongBreak = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.LONG_BREAK
  });
};

export const switchFromLongBreak = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.FROM_LONG_BREAK
  });
};

