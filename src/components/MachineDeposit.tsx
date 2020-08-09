import React from "react";
import {CurrenceType} from "../redux/reducers/user/types";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {Title} from "./Title/Title";

export const MachineDeposit = () => {
    const {deposite, amount}: any = useSelector<AppStateType>(state => state.machine);

    return (
        <>
            <Title text={'Деньги автомата'} num={amount} />
            {deposite.map((dep: CurrenceType, index: number) => {
                return <div key={`machineDeposite${index}`}>{dep.currency} руб. ({dep.count})</div>
            })}
        </>
    );
};