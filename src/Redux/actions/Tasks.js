import * as actionTypes from '../actions/actionTypes';


export const switchToBreak = () => async (dispatch, getState) => {
  return dispatch({
    type: actionTypes.SHORT_BREAK
  });
};