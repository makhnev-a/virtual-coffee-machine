import {InitialStateType} from "./types";

const initialState: InitialStateType = {
    deposite: [
        {currency: 1, count: 100},
        {currency: 2, count: 100},
        {currency: 5, count: 100},
        {currency: 10, count: 100}
    ]
};

export const machineReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};