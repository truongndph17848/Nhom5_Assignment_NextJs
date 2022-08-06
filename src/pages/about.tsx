import WebsiteLayout from '@/components/Layout/WebsiteLayout';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAddressBook,
  faSitemap,
  faDraftingCompass,
  faNewspaper,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

const About = (props: Props) => {
	return (
		<div>
				<section className="relative bg-blueGray-50">
					<div className="flex flex-wrap items-center">
						<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
								<img
									alt="..."
									src="https://media.istockphoto.com/photos/luxury-clothing-store-for-men-picture-id831656828?k=6&m=831656828&s=612x612&w=0&h=NVsZnoxXAdjLJFzt56ZOVzMgSEV7O0jmBKoDqhAKjtQ="
									className="w-full align-middle rounded-t-lg"
								/>
							</div>
						</div>
						<div className="w-full md:w-6/12 px-4">
							<div className="flex flex-wrap">
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FontAwesomeIcon icon={faFileAlt}/>
											</div>
											<h6 className="text-xl mb-1 font-semibold">LOGO SHOP</h6>
											<p className="mb-4 text-blueGray-500">
                        LOGO SHOP sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời trang hàng hiệu trực tuyến thú vị.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">	
                        <FontAwesomeIcon icon={faDraftingCompass}/>
											</div>
											<h6 className="text-xl mb-1 font-semibold">ĐA DẠNG</h6>
											<p className="mb-4 text-blueGray-500">
                      LOGO SHOP luôn cập nhật những xu hướng thời trang phong cách nhất.
                      Đặc biệt, LOGO SHOP còn có nhiều đợt khuyến mãi, giảm giá đặc biệt với giá tốt nhất. Thời trang hàng hiệu chất lượng cao, phù hợp túi tiền!
											</p>
										</div>
									</div>
								</div>
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col min-w-0 mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FontAwesomeIcon icon={faNewspaper}/>
											</div>
											<h6 className="text-xl mb-1 font-semibold">TRI ÂN KHÁCH HÀNG</h6>
                        <p className="mb-4 text-blueGray-500">
                          LOGO SHOP sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của mình bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo của LOGO SHOP.
                        </p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FontAwesomeIcon icon={faAddressBook}/>
											</div>
											<h6 className="text-xl mb-1 font-semibold">PHONG CÁCH MUA SẮM HIỆN ĐẠI</h6>
											<p className="mb-4 text-blueGray-500">
                        Bạn có thể mua sắm thoải mái trên LOGO SHOP mà không có bất kỳ lo lắng nào: trả hàng trong vòng 30 ngày kể từ ngày nhận hàng.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center md:justify-between justify-center">
							<div className="w-full md:w-6/12 px-4 mx-auto text-center">
								<div className="text-sm text-blueGray-500 font-semibold py-1">
									Cảm ơn quý khách đã theo dõi
								</div>
							</div>
						</div>
					</div>
				</footer>
			</section>
		</div>
	);
};
About.WebsiteLayout = WebsiteLayout;
export default About;
