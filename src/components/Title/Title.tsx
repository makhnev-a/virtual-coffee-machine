import React from "react";
import styles from './Title.module.css';

type PropsType = {
    text: string
    num?: number
};

export const Title = ({text, num = 0}: PropsType) => {
    return (
        <h3 className={styles.title}>{text}: {num}</h3>
    );
};