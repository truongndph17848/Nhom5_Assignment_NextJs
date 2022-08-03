import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {
    faClose,
    faAmbulance,
    faAnchor,
  } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const CartPage = (props: Props) => {
	return (
		<div>
			<div className="h-screen bg-gray-300">
				<div className="py-12">
					<div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
						<div className="md:flex ">
							<div className="w-full p-4 px-5 py-5">
								<div className="md:grid md:grid-cols-3 gap-2 ">
									<div className="col-span-2 p-5">
										<h1 className="text-xl font-medium ">Giỏ hàng của bạn</h1>
										<div className="flex justify-between items-center mt-6 pt-6">
											<div className="flex  items-center">
												<img
													src="https://i.imgur.com/EEguU02.jpg"
													width={60}
													className="rounded-full "
												/>
												<div className="ml-3">
													<span className="md:text-md font-medium">Chicken momo</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8 flex ">
													<span className="font-semibold">-</span>
													<input
														type="text"
														className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
														defaultValue={1}
													/>
													<span className="font-semibold">+</span>
												</div>
												<div className="pr-8 ">
													<span className="text-xs font-medium">100.000</span>
												</div>
												<div>
                                                    <FontAwesomeIcon icon={faClose}/>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center pt-6 mt-6 border-t">
											<div className="flex  items-center">
												<img
													src="https://i.imgur.com/Uv2Yqzo.jpg"
													width={60}
													className="rounded-full "
												/>
												<div className="ml-3 ">
													<span className="text-md font-medium w-auto">
														Spicy Mexican potatoes
													</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8 flex">
													<span className="font-semibold">-</span>
													<input
														type="text"
														className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
														defaultValue={1}
													/>
													<span className="font-semibold">+</span>
												</div>
												<div className="pr-8">
													<span className="text-xs font-medium">100.000</span>
												</div>
												<div>
                                                    <FontAwesomeIcon icon={faClose}/>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center mt-6 pt-6 border-t">
											<div className="flex  items-center">
												<img
													src="https://i.imgur.com/xbTAITF.jpg"
													width={60}
													className="rounded-full "
												/>
												<div className="ml-3 ">
													<span className="text-md font-medium">Breakfast</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8 flex">
													<span className="font-semibold">-</span>
													<input
														type="text"
														className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
														defaultValue={1}
													/>
													<span className="font-semibold">+</span>
												</div>
												<div className="pr-8">
													<span className="text-xs font-medium">100.000</span>
												</div>
												<div>                                                    
                                                    <FontAwesomeIcon icon={faClose}/>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center mt-6 pt-6 border-t">
											<div className="flex items-center">
												<i className="fa fa-arrow-left text-sm pr-2" />
												<span className="text-md  font-medium text-blue-500">
													Tiếp tục mua hàng
												</span>
											</div>
											<div className="flex justify-center items-end">
												<span className="text-sm font-medium text-gray-400 mr-1">
													Tổng:
												</span>
												<span className="text-lg font-bold text-gray-800 "> $24.90</span>
											</div>
										</div>
									</div>
									<div className=" p-5 bg-gray-800 rounded overflow-visible">
										<span className="text-xl font-medium text-gray-100 block pb-3">
											Thông tin người nhận
										</span>
										<span className="text-xs text-gray-400 ">Phương thức thanh toán</span>
										<div className="overflow-visible flex justify-between items-center mt-2">
											<div className="flex justify-center items-center">
												<img
													src="https://res.cloudinary.com/dfwailscz/image/upload/v1659444335/huong-dan-thanh-toan-removebg-preview_zscviv.png"
													className="relative right-5 w-3/6"
												/>
											</div>
										</div>
										<div className="flex justify-center flex-col pt-3">
											<label className="text-xs text-gray-400 ">Người nhận</label>
											<input
												type="text"
												className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
												placeholder="Giga Tamarashvili"
											/>
										</div>
										<div className="flex justify-center flex-col pt-3">
											<label className="text-xs text-gray-400 ">Số điện thoại</label>
											<input
												type="text"
												className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
												placeholder="03#####"
											/>
										</div>
										<div className="flex justify-center flex-col pt-3">
											<label className="text-xs text-gray-400 ">Địa chỉ</label>
											<input
												type="text"
												className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
												placeholder="Xã/Phường - Quận/Huyện -Tỉnh"
											/>
										</div>
										{/* <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
											<div className="col-span-2 ">
												<label className="text-xs text-gray-400">Expiration Date</label>
												<div className="grid grid-cols-2 gap-2">
													<input
														type="text"
														className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
														placeholder="mm"
													/>
													<input
														type="text"
														className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
														placeholder="yyyy"
													/>
												</div>
											</div>
											<div>
												<label className="text-xs text-gray-400">CVV</label>
												<input
													type="text"
													className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
													placeholder="XXX"
												/>
											</div>
										</div> */}
										<button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
											Đặt mua
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CartPage.WebsiteLayout = WebsiteLayout;
export default CartPage;
