import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {setBuyProductAc} from "../../../redux/reducers/machine/machine.reducer";

type PropsType = {
    name: string
    count: number
    price: number
    img: string
};

export const Product = ({name, count, price, img}: PropsType) => {
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
            <img
                width={100}
                height={100}
                src={img}
                alt="Картинка продукта"
                onClick={clickProductHandler}
            />
            <br/>
            <span>{name} ({count})</span>
            <div>{price} руб.</div>
            <button onClick={clickProductHandler}>Купить</button>
        </article>
    );
};