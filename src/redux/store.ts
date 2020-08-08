import {combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/product/product.reducer";

const rootReducer = combineReducers({
    product: productReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;