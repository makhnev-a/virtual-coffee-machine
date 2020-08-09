import React from "react";
import {setAmountAc} from "../../../redux/reducers/user/user.reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    currency: number
    count: number
    index: string
};

export const UserDepositRow = ({currency, count, index}: PropsType) => {
    const dispatch = useDispatch();
    const clickAmountHandler = () => dispatch(setAmountAc(count, currency));

    return (
        <div key={`userDeposite${index}`}>
            {currency} руб. ({count})
            <button onClick={clickAmountHandler}>Внести</button>
        </div>
    );
};