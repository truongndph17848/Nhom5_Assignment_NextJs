import { add, removeItem, update } from "@/api/product";
import { Product } from "@/models/Product";
import useSWR from "swr";
const useProducts = (options?: any) => {
    const { data, error, mutate } = useSWR("/products", { dedupingInterval: 2000, ...options });
    const create = async (item: Product) => {
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
    const editProduct = async (product: Product) => {
        await update(product)
        mutate(data.map((item: Product) => (item.id === data.id ? product : item)))
    }
    return {
        data,
        error,
        create,
        remove,
        editProduct
    };
};

export default useProducts;
