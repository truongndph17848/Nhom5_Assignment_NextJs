import instance from "./instance";

// export const getAll = () => {
//     return instance.get('/products');
// }
export const add = (category: any) => {
    return instance.post("/categories", category);
};
export const removeItem = (id: any) => {
    return instance.delete(`/categories/${id}`);
};
export const read = (id: any) => {
    return instance.get(`/categories/${id}`);
};
export const update = (category: any) => {
    return instance.put(`/categories/${category.id}`, category);
};