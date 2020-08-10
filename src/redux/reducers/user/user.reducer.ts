import {ActionsType, CurrenceType, InitialStateType, ReturnCoinsType, SetAmountType} from "./types";

export const SET_AMOUNT = 'User/UserReducer/SET_AMOUNT';
export const RETURN_COINS = 'User/UserReducer/RETURN_COINS';

const initialState: InitialStateType = {
    deposite: [
        {currency: 1, count: 10},
        {currency: 2, count: 30},
        {currency: 5, count: 20},
        {currency: 10, count: 15}
    ],
    amount: 320
};

export const userReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        case RETURN_COINS:
            return {
                ...state,
                deposite: calcCoins(action.sum, state.deposite)
            };
        default:
            return state;
    }
};

export const setAmountAc = (currency: number): SetAmountType => ({
    type: SET_AMOUNT,
    currency
});

export const returnCoins = (sum: number): ReturnCoinsType => ({
    type: RETURN_COINS,
    sum
});

const calcCoins = (sum: number, deposite: Array<CurrenceType>): Array<CurrenceType> => {
    const obj: { [key: string]: number } = {
        '1': 0,
        '2': 0,
        '5': 0,
        '10': 0
    };

    const ten = Math.floor((sum % 1000) / 10);

    for (let i = 0; i < ten; i++) {
        sum = sum - 10;
        obj['10']++;
    }

    const five = Math.floor((sum % 100) / 5);

    for (let i = 0; i < five; i++) {
        sum = sum - 5;
        obj['5']++;
    }

    const two = Math.floor((sum % 100) / 2);

    for (let i = 0; i < two; i++) {
        sum = sum - 2;
        obj['2']++;
    }

    const one = Math.floor((sum % 100));

    for (let i = 0; i < one; i++) {
        sum = sum - 1
        obj['1']++;
    }

    return deposite.map((dep: CurrenceType) => ({...dep, count: dep.count + obj[dep.currency]}));
};