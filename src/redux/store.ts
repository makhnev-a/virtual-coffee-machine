import {combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/product/product.reducer";
import {userReducer} from "./reducers/user/user.reducer";
import {machineReducer} from "./reducers/machine/machine.reducer";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    machine: machineReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;