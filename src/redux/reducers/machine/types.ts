import { SET_AMOUNT, SET_USER_DEPOSITED_AMOUNT, SET_BUY_PRODUCT } from "./machine.reducer";

export type InitialStateType = {
    deposite: Array<MachineCurrencyType>
    amount: number,
    userDepositedAmount: number
};

export type MachineCurrencyType = {
    currency: number
    count: number
};

export type SetMachineAmountType = {
    type: typeof SET_AMOUNT
    currency: number
    count: number
};

export type SetUserDepositedAmountType = {
    type: typeof SET_USER_DEPOSITED_AMOUNT
    amount: number
};

export type SetBuyProductType = {
    type: typeof SET_BUY_PRODUCT
    amount: number
};

export type ActionsType = SetMachineAmountType | SetUserDepositedAmountType | SetBuyProductType;