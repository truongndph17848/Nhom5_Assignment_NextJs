import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import CategoryList from '.';

type Props = {};

const CateProduct = (props: Props) => {
	const router = useRouter();
	const { id } = router.query;
	const { data, error } = useSWR(id ? `/categories/${id}` : null);
	if (!data) return <div>Loading...</div>;
	if (error) return <div>Failed to load</div>;
	console.log(data.products);
	return (
		<div className="grid grid-cols-5 gap-4">
			<CategoryList />

			<div className="bg-white col-span-4">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{data.products?.map((item: any, index: any) => (
							<div key={index} className="group relative">
								<Link href={`/products/${item._id}`}>
									<a >
										<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
											<img
												src={item.img}
												className="w-full h-full object-center object-cover lg:w-full lg:h-full"
											/>
										</div>
										<div className="mt-4 text-center">
											<Link href={`/products/${item._id}`}>
												<h3 className="cursor-pointer text-sm text-gray-700">{item.name}</h3>
											</Link>
											<p className="text-sm font-bold text-red-900 ">
												200.000 <span className="line-through text-gray-500">250.000</span>
											</p>
										</div>
									</a>
								</Link>
							</div>

						))}
					</div>
				</div>
			</div >
		</div >
	);
};
CateProduct.WebsiteLayout = WebsiteLayout
export default CateProduct;
