import React from "react";
import {Title} from "./Title/Title";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

export const DepositedAmount = () => {
    const {userDepositedAmount}: any = useSelector<AppStateType>(state => state.machine);

    return (
        <Title text={'Внесенная сумма'} num={userDepositedAmount}/>
    );
};