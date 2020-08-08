import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {ProductType} from "../redux/reducers/product/types";

export const Products = () => {
    const products: any = useSelector<AppStateType>(state => state.product.products);

    return (
        <>
            <ul>
                {products.map((product: ProductType, index: number) => <li key={`product${index}`}>{product.name}</li>)}
            </ul>
        </>
    );
};