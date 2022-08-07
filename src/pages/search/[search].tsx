import { searchProduct } from "@/api/product";
import { Product } from "@/components/Layout/productType";
import WebsiteLayout from "@/components/Layout/WebsiteLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
;


const SearchPage = () => {
  const router = useRouter();
  const { search } = router.query;
	const [products, setProducts] = useState<any>();


  

  useEffect(() => {
    (async () => {
      try {
        const products = await searchProduct(search as string);
        setProducts(products);

        
      } catch (error) {

      }
    })();

  }, [search]);

    
  return (
    <div className="container-base">
      <main>
        <section>
          <div>
            <ul className="flex py-5">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>{" "}
              <span className="px-3 ">/</span>
              <li>
                <Link href="/">Tất cả sản phẩm</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl font-sans font-semibold pt-50">{`Kết quả tìm kiếm "${search}"`}</h1>
        </section>
        <section className="col-span-12 lg:col-span-9 pb-4">
          <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
            {!products?.length && <p className="mt-2">Không tìm thấy sản phẩm!</p>}



            <div className="bg-white col-span-4">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products?.map((item: any, index: any) => (
							<div key={index} className="group relative">
								<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
									<img
										src={item.img}
										className="w-full h-full object-center object-cover lg:w-full lg:h-full"
									/>
								</div>
								<div className="mt-4 text-center">
									<Link href={`products/${item.id}`}>
										<h3 className="cursor-pointer text-sm text-gray-700">{item.name}</h3>
									</Link>
									<p className="text-sm font-bold text-red-900 ">
										200.000 <span className="line-through text-gray-500">250.000</span>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;

SearchPage.WebsiteLayout = WebsiteLayout;
