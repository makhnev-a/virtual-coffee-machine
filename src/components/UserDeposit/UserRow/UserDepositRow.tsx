import React from "react";
import {setAmountAc} from "../../../redux/reducers/user/user.reducer";
import {useDispatch} from "react-redux";
import {setMachineAmountAc, setUserDepositedAmountAc} from "../../../redux/reducers/machine/machine.reducer";

type PropsType = {
    currency: number
    count: number
    index: string
};

export const UserDepositRow = ({currency, count, index}: PropsType) => {
    const dispatch = useDispatch();
    const clickAmountHandler = () => {
        dispatch(setAmountAc(count, currency));
        dispatch(setMachineAmountAc(count, currency));
        dispatch(setUserDepositedAmountAc(currency));
    };

    return (
        <div key={`userDeposite${index}`}>
            {currency} руб. ({count})
            <button onClick={clickAmountHandler}>Внести</button>
        </div>
    );
};