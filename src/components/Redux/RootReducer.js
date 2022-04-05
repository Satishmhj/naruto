import { combineReducers } from "redux";
import narutoReducer from "./Reducers/NarutoApiReducer";

export const RootReducer = combineReducers({
  naruto: narutoReducer,
});
