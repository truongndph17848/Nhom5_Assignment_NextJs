import { add, removeItem, update } from "@/api/category";
import useSWR from "swr";
const useCategory = (options?) => {
    const { data, error, mutate } = useSWR("/categories", { dedupingInterval: 2000, ...options });
    const create = async (item) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    const remove = async (id: any) => {
        const confirm = window.confirm('Bạn có muốn xóa không ?')
        if (confirm) {
            await removeItem(id);
            const newProducts = data.filter((item) => item.id != id);
            mutate(newProducts);
        }
    };
    const editCategory = async (product: any) => {
        await update(product)
        mutate(data.map((item: any) => (item.id === data.id ? product : item)))
    }
    return {
        data,
        error,
        create,
        remove,
        editCategory
    };
};

export default useCategory;

