export type ProductType = {
    id: number
    name: string
    price: number
    count: number
};

export type InitialStateType = {
    products: Array<ProductType>
};