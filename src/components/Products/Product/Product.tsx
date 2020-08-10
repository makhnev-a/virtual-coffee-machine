import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {setBuyProductAc} from "../../../redux/reducers/machine/machine.reducer";

type PropsType = {
    name: string
    count: number
    price: number
};

export const Product = ({name, count, price}: PropsType) => {
    const amount: any = useSelector<AppStateType>(state => state.machine.userDepositedAmount);
    const dispatch = useDispatch();

    const clickProductHandler = () => {
        if (amount === 0) {
            alert('Внесите деньги');
        } else if (amount < price) {
            alert('Вам не хватает, внесите еще денег');
        } else {
            dispatch(setBuyProductAc(price));
        }
    };

    return (
        <article>
            <span>{name} ({count})</span>
            <div>{price} {amount}</div>
            <button onClick={clickProductHandler}>Купить</button>
        </article>
    );
};