import useProducts from "@/hooks/use-product";
import styles from "../styles/Home.module.css";


import LayoutAdmin from '@/components/Layout/AdminLayout'
import WebsiteLayout from '@/components/Layout/WebsiteLayout'


const Home = () => {
    const { data: products, error, create, remove } = useProducts();
    if (!products) return <div>Loading...</div>;
    if (error) return <div>error</div>;

    return (
        <div className={styles.container}>
            {products.map((product, index) => (
                <div key={index}>
                    {product.name} <button onClick={() => remove(product.id)}>Delete</button>
                </div>
            ))}
            <button onClick={() => create({ id: 12, name: "Product 12" })}>Create</button>
        </div>
    );
};


Home.WebsiteLayout = WebsiteLayout;
// Home.LayoutAdmin = LayoutAdmin

export default Home;
