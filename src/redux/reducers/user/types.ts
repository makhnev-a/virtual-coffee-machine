import {RETURN_COINS, SET_AMOUNT} from "./user.reducer";

export type CurrenceType = {
    currency: number
    count: number
};

export type InitialStateType = {
    deposite: Array<CurrenceType>
    amount: number
};

export type SetAmountType = {
    type: typeof SET_AMOUNT
    currency: number
};

export type ReturnCoinsType = {
    type: typeof RETURN_COINS
    sum: number
};

export type ActionsType = SetAmountType | ReturnCoinsType;