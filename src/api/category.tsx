import instance from "./instance";

// export const getAll = () => {
//     return instance.get('/products');
// }
export const addCategory = (category: any) => {
    return instance.post("/categories", category);
};
export const removeCategory = (id: any) => {
    return instance.delete(`/categories/${id}`);
};
export const getCategory = (id: any) => {
    return instance.get(`/categories/${id}`);
};