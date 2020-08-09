import { InitialStateType } from "./types";

const SET_AMOUNT = 'User/UserReducer/SET_AMOUNT';

const initialState: InitialStateType = {
    deposite: [
        {currency: 1, count: 10},
        {currency: 2, count: 30},
        {currency: 5, count: 20},
        {currency: 10, count: 15}
    ],
    amount: 320
};

export const userReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AMOUNT:
            return {
                ...state,
                amount: state.amount - action.currency,
                deposite: state.deposite.map((dep: any) => {
                    if (dep.currency !== action.currency) {
                        return dep;
                    } else {
                        return {
                            ...dep, count: dep.count - 1
                        };
                    }
                })
            };
        default:
            return state;
    }
};

export const setAmountAc = (newCount: number, currency: number) => ({
    type: SET_AMOUNT,
    newCount,
    currency
});

// export const setDepositeAc = (newCount: number) => ({
//    type: SET_DEPOSITE,
//     newCount
// });