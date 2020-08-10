import {
    ActionsType,
    InitialStateType,
    MachineCurrencyType,
    SetBuyProductType,
    SetMachineAmountType,
    SetUserDepositedAmountType
} from "./types";

export const SET_AMOUNT = 'Machine/MachineReducer/SET_AMOUNT';
export const SET_USER_DEPOSITED_AMOUNT = 'Machine/MachineReducer/SET_USER_DEPOSITED_AMOUNT';
export const SET_BUY_PRODUCT = 'Machine/MachineReducer/SET_BUY_PRODUCT';

const initialState: InitialStateType = {
    deposite: [
        {currency: 1, count: 100},
        {currency: 2, count: 100},
        {currency: 5, count: 100},
        {currency: 10, count: 100}
    ],
    amount: 1800,
    userDepositedAmount: 0
};

export const machineReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_AMOUNT:
            return {
                ...state,
                amount: state.amount + action.currency,
                deposite: state.deposite.map((dep: MachineCurrencyType) => {
                    if (dep.currency !== action.currency) {
                        return dep;
                    } else {
                        return {...dep, count: dep.count + 1};
                    }
                })
            };
        case SET_USER_DEPOSITED_AMOUNT:
            return {...state, userDepositedAmount: state.userDepositedAmount + action.amount};
        case SET_BUY_PRODUCT:
            return {...state, userDepositedAmount: state.userDepositedAmount - action.amount};
        default:
            return state;
    }
};

export const setMachineAmountAc = (count: number, currency: number): SetMachineAmountType => ({
    type: SET_AMOUNT,
    currency,
    count
});

export const setUserDepositedAmountAc = (amount: number): SetUserDepositedAmountType => ({
    type: SET_USER_DEPOSITED_AMOUNT,
    amount
});

export const setBuyProductAc = (amount: number): SetBuyProductType => ({
    type: SET_BUY_PRODUCT,
    amount
});