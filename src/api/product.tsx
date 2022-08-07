import { Product } from "@/models/Product";
import instance from "./instance";

// export const getAll = () => {
//     return instance.get('/products');
// }
export const add = (product: Product) => {
    return instance.post("/products", product);
};
export const removeItem = (id: any) => {
    return instance.delete(`/products/${id}`);
};
export const read = (id: any) => {
    return instance.get(`/products/${id}`);
};
export const update = (product: Product) => {
    return instance.put(`/products/${product._id}`, product);
};
export const searchProduct = (search: any) => {
    const url = `/search?q=${search}`;
    return instance.post(url);
};