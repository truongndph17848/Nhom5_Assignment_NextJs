import { addCategory, removeCategory, getCategory } from "@/api/category";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

const useCategory = (options?) => {
    const { data, error, mutate } = useSWR("/categories", { dedupingInterval: 2000, ...options });

    // create
    const create = async (item) => {
        const category = await addCategory(item);
        mutate([...data, category]);
    };
    // update
    // delete
    const remove = async (id) => {
        await removeCategory(id);
        const newCategories = data.filter((item) => item.id != id);
        mutate(newCategories);
    };
    return {
        data,
        error,
        create,
        remove,
    };
};

export default useCategory;
