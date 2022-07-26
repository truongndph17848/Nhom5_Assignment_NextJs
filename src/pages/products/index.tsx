import WebsiteLayout from "@/components/Layout/WebsiteLayout";
import useProducts from "@/hooks/use-product";
import Link from "next/link";

// client
const ProductPage = () => {
    // const { data, error } = useProducts();
    return (
        <div>
            HIHI
            {/* {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))} */}
        </div>
    );
};
ProductPage.Layout = WebsiteLayout

export default ProductPage;
