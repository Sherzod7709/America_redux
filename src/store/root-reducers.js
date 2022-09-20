import { combineReducers } from "redux";
import { newsReducer } from "./reducers/newsR";

export const rootReducer = combineReducers({
  news: newsReducer,
});
