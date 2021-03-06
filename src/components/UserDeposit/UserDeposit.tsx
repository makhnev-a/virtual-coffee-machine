import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CurrenceType} from "../../redux/reducers/user/types";
import {Title} from "../Title/Title";
import {UserDepositRow} from "./UserRow/UserDepositRow";
import {returnCoins} from "../../redux/reducers/user/user.reducer";
import {setBuyProductAc} from "../../redux/reducers/machine/machine.reducer";

export const UserDeposit = () => {
    const dispatch = useDispatch();
    const [deposite, amount, userDepositedAmount] = useSelector((state: AppStateType) => [
        state.user.deposite,
        state.user.amount,
        state.machine.userDepositedAmount
    ]);

    const onSurrenderHandler = () => {
        if (userDepositedAmount !== 0) {
            dispatch(returnCoins(userDepositedAmount));
            dispatch(setBuyProductAc(userDepositedAmount))
        }
    };

    return (
        <>
            <Title text={'Ваши деньги'} num={amount}/>
            {deposite.map((dep: CurrenceType, index: number) =>
                <UserDepositRow
                    key={`userDeposit${index}`}
                    currency={dep.currency}
                    count={dep.count}
                    index={`userDeposite${index}`}
                />
            )}
            <br/>
            <button onClick={onSurrenderHandler}>Сдача</button>
        </>
    );
};