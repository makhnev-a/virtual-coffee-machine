export type InitialStateType = {
    deposite: Array<MachineCurrencyType>
    amount: number,
    userDepositedAmount: number
};

export type MachineCurrencyType = {
    currency: number
    count: number
};