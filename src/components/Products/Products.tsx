import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProductType} from "../../redux/reducers/product/types";
import {Product} from "./Product/Product";
import styles from './products.module.css';

export const Products = () => {
    const {products} = useSelector((state: AppStateType) => state.product);

    return (
        <>
            <aside className={styles.products}>
                {products.map((product: ProductType, index: number) =>
                    <Product
                        name={product.name}
                        count={product.count}
                        price={product.price}
                        img={product.img}
                        key={`product${index}`}
                    />
                )}
            </aside>
        </>
    );
};