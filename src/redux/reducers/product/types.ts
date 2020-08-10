export type ProductType = {
    id: number
    name: string
    price: number
    count: number
    img: string
};

export type InitialStateType = {
    products: Array<ProductType>
};