import { Product } from "./Product"

export type Category = {
    _id:string,
    name:string,
}
export type CateProduct = {
    category: {
        _id: string,
        name: string,
    },
    products: Product[]
}