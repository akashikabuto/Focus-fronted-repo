
import * as actionTypes from '../actions/actionTypes';

let url = `https://focus250-api.herokuapp.com/`;


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

export const getAllTasks = () => async (dispatch, getState) => {

  const config = {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')} `
    },
  };
  try {
    const res = await (await fetch(`${url}api/task/all`, config)).json();
    if (res.status === 200) {
      return dispatch({
        type: actionTypes.ALL_TASKS,
        payload: res.data
      });
    }
    else if (res.status === 401) {
      return dispatch({
        type: actionTypes.NO_AUTH
      });
    }
  } catch (error) {
    window.alert("Server Error");
  }
};

