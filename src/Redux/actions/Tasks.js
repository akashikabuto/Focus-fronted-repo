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


export const switchFromLongBreak = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.FROM_LONG_BREAK
  });
};

export const SeeLoginContainer = () => async (dispatch, getState) => {
  const { tasks } = getState();
  const status = tasks.seeLogin;
  if (!status) {
    return dispatch({
      type: actionTypes.SEE_LOGIN
    });
  }
  else {
    return dispatch({
      type: actionTypes.UN_SEE_LOGIN
    });
  }
};

