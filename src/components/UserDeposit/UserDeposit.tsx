import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CurrenceType} from "../../redux/reducers/user/types";
import {Title} from "../Title/Title";
import {UserDepositRow} from "./UserRow/UserDepositRow";

export const UserDeposit = () => {
    const {deposite, amount}: any = useSelector<AppStateType>(state => state.user);

    return (
        <>
            <Title text={'Ваши деньги'} num={amount}/>
            {deposite.map((dep: CurrenceType, index: number) =>
                // return <div key={`userDeposite${index}`}>{dep.currency} руб. ({dep.count}) <button onClick={() => {dispatch(setAmountAc(dep.count, dep.currency))}}>Внести</button></div>
                <UserDepositRow
                    key={`userDeposit${index}`}
                    currency={dep.currency}
                    count={dep.count}
                    index={`userDeposite${index}`}
                />
            )}
            <br/>
            <button>Сдача</button>
        </>
    );
};