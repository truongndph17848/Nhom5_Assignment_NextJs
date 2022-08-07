import WebsiteLayout from '@/components/Layout/WebsiteLayout'
import useCategory from '@/hooks/use-category'
import React from 'react'

type Props = {}

const CategoryList = (props: Props) => {
    const { data, error} = useCategory()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Fail on load</div>
    console.log(data);
    
  return (
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
							{data.map((item, index)=>{
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
  )
}
CategoryList.WebsiteLayout = WebsiteLayout

export default CategoryList