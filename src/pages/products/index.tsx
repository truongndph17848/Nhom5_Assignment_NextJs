import useProducts from "@/hooks/use-product";
import Link from "next/link";

// client
const ProductPage = () => {
    const { data, error } = useProducts();

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
