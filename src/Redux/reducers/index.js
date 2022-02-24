import { combineReducers } from "redux";
import { ActionReducer } from "./actions";


export const reducer = combineReducers({
  tasks: ActionReducer
});