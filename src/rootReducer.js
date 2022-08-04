import { combineReducers } from "redux";
import cartReducer from "./pages/products/reducers/index";

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;