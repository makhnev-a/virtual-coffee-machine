import { InitialStateType } from "./types";
import Tea from './../../../assets/img/tea.png';
import Coffee from './../../../assets/img/coffee.jpg';
import Juice from './../../../assets/img/juice.jpg';
import MilkCoffee from './../../../assets/img/milk-coffee.jpeg';

const initialState: InitialStateType = {
    products: [
        {id: 1, name: 'Tea', price: 13, count: 10, img: Tea},
        {id: 2, name: 'Coffee', price: 18, count: 20, img: Coffee},
        {id: 3, name: 'Milk Coffee', price: 21, count: 20, img: MilkCoffee},
        {id: 4, name: 'Juice', price: 35, count: 15, img: Juice}
    ]
};

export const productReducer = (state: InitialStateType = initialState, actions: any): InitialStateType => {
    switch (actions.type) {
        default:
            return state;
    }
};