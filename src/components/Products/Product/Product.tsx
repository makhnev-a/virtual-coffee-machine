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
    const dispatch = useDispatch();
    const amount = useSelector((state: AppStateType) => state.machine.userDepositedAmount);

    const clickProductHandler = () => {
        if (amount === 0) {
            alert('Внесите сумму!');
        } else if (amount < price) {
            alert(`Недостаточно средств: ${price - amount}`);
        } else {
            dispatch(setBuyProductAc(price));
            alert(`Спасибо! Вами приобретён ${name}`);
        }
    };

    return (
        <article>
            <span>{name} ({count})</span>
            <div>{price} руб.</div>
            <button onClick={clickProductHandler}>Купить</button>
        </article>
    );
};