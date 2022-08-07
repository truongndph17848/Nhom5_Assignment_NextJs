import useProducts from '@/hooks/use-product';
import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import Link from 'next/link';
import { GetStaticProps } from 'next';

type Props = {
	categories: any[]
}
const Home = ({categories}: Props) => {
	const { data, error } = useProducts();
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	console.log(categories)
	return (
		<div className="grid grid-cols-5 gap-4">
			<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  text-gray-800">
				<div className="flex flex-col left-0 h-full w-64 bg-white border-r">
					<div className="overflow-y-auto overflow-x-hidden flex-grow">
						<ul className="flex flex-col py-4 space-y-1">
							<li className="px-7 mb-5">
								<div className="flex flex-row items-center h-8">
									<div className="text-xl font-mono font-bold tracking-wide text-gray-500 text-center">
										Danh mục sản phẩm
									</div>
								</div>
							</li>
							{categories.map((item, index)=>{
								return (
									<li key={index} className="px-7">
								<a
									href="#"
									className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
								>
									<span className="ml-2 text-base font-mono tracking-wide truncate">{item?.name}</span>
                                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
										20
									</span>
                                </a>
							</li>
								)
							})}
							<li className="px-7">
								<a
									href="#"
									className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
								>
									<span className="ml-2 text-base font-mono tracking-wide truncate">Notifications</span>
									<span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
										1.2k
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-white col-span-4">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{data.map((item: any, index: any) => (
							// eslint-disable-next-line react/jsx-key
							<a href={`products/${item.id}`}>
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
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

Home.WebsiteLayout = WebsiteLayout;

export const getStaticProps: GetStaticProps = async() => {
	const res = await fetch('http://localhost:3001/categories')
	const categories = await res.json()	

return {
	props: {
		categories,
	},
	revalidate: 60
}
}

export default Home;
