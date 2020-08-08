import React from 'react';

type PropsType = {
    name: string
    count: number
    price: number
};

export const Product = ({name, count, price}: PropsType) => {
    return (
        <article>
            <span>{name} ({count})</span>
            <div>{price}</div>
            <button>Купить</button>
        </article>
    );
};