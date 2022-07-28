import useProducts from "@/hooks/use-product";
import WebsiteLayout from '@/components/Layout/WebsiteLayout'
const Home = () => {
    const { data, error } = useProducts();
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm mới nhất</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://cf.shopee.vn/file/0dc49f4684fbbec8b567db91a090c3bf" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://dotobjyajpegd.cloudfront.net/photo/5e9ff51d4841bc1446b3362a" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://dotobjyajpegd.cloudfront.net/photo/5e9ff5264841bc1446b3365e_m" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://vn-test-11.slatic.net/p/93f302f0def7b9fe065573be16234d72.jpg" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://cf.shopee.vn/file/2729293025883f31fab8ceb7c7e8538c" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://cf.shopee.vn/file/d8864ed7973c8b31de1d891a4e1dc87a" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://cf.shopee.vn/file/ef42c9312f0d3116e98e73921ccef01a" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        <div className="group relative ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="https://toplist.vn/images/800px/odin-custom-dien-bien-747474.jpg" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Basic Tee
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-xl font-bold text-red-500">$35</p>
                            </div>
                        </div>
                        {/* More products... */}
                    </div>
                </div>
            </div>

        </div>
    );
};


Home.WebsiteLayout = WebsiteLayout;
// Home.LayoutAdmin = LayoutAdmin

export default Home;
