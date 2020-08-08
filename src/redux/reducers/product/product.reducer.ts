import { InitialStateType } from "./types";

const initialState: InitialStateType = {
    products: [
        {id: 1, name: 'Tea', price: 13, count: 10},
        {id: 2, name: 'Coffee', price: 18, count: 20},
        {id: 3, name: 'Milk Coffee', price: 21, count: 20},
        {id: 4, name: 'Juice', price: 35, count: 15}
    ]
};

export const productReducer = (state: InitialStateType = initialState, actions: any): InitialStateType => {
    switch (actions.type) {
        default:
            return state;
    }
};