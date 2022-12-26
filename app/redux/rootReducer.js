import { combineReducers } from "redux";
import { coinReducer } from "./coins/CoinReducer";

const rootReducer = combineReducers({
  coinState: coinReducer,
});

export default rootReducer;
