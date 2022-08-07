import { Category } from "@/models/Category";
import instance from "./instance";

export const add = (category: Category) => {
    return instance.post("/categories", category);
};
export const removeItem = ( id: string) => {
    return instance.delete(`/categories/${id}`);
};
export const read = (id:string) => {
    return instance.get(`/categories/${id}`);
};
export const update = (category: Category) => {
    return instance.put(`/categories/${category._id}`, category);
};