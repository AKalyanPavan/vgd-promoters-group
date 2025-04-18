import firstSection from '../images/first-section.png';
import whyVGD from '../images/whyVGD.svg';
import check from '../images/check.svg';
import quotes from '../images/quotes.png';
import star from '../images/star.svg';

import Header from './Header.js';
import Footer from './Footer.js';

import { highlights, brands, services, whyChooseVGD, reviews } from './Variables.js';

export default function Homepage() {
	return(
		<>
			<Header activeTab="home" customStyle="bg-[#ffffff]" />
			<div className="font-['Lexend_Deca']">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[#21739D] my-[50px]">
						<div className="flex justify-between items-start gap-[50px]">
							<div className="xl:max-w-[650px]">
								<div className="text-[40px] sm:text-[48px]">VGD Promoters Group</div>
								<div className="text-[30px] text-[#73A729]">Turning Visions into Reality</div>
								<div className="my-[30px] sm:text-[18px]">
									Whether you're seeking DTCP-approved plots, end-to-end construction services, or expert property consultation—VGD Promoters Group delivers unmatched value with over a decade of industry leadership and 100+ successful projects.
								</div>
								<div className="w-fit mt-[30px] flex flex-col gap-[20px] max-w-[800px] sm:text-[18px]">
									{highlights.map((item, index) => (
										<div className="flex items-start gap-[10px]">
											<img src={check} />
											<span>{item}</span>
										</div>
									))}
								</div>
								<div className="w-fit text-center bg-[#21739D] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
									<span className="text-[#ffffff] font-medium">
										Book an Appointment
									</span>
								</div>
							</div>
							<img src={firstSection} className="max-[1100px]:hidden w-[40%]" />
						</div>
						<div className="mt-[50px] text-center">
							<div className="text-[32px]">
								Our Clientele
							</div>
							<div className="text-black py-[20px]">
								We proudly serve top-tier institutions and corporates
							</div>
							<div className="flex flex-wrap justify-center mt-[20px] gap-[25px]">
								{brands.map((item, index) => (
									<img src={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#CFEAFA]">
				<div className="text-[#21739D] py-[50px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[32px] text-center font-medium">
						Our Services
					</div>
					<div className="grid min-[1100px]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[50px]">
						{services.map((service, index) => (
							<div className="flex items-center gap-[30px] bg-white p-[20px] border-solid border-[1.5px] border-[#21739D] rounded-[10px]">
								<img src={service.imageSource} className="mt-[4px] w-[50px]" />
								<div>
									<div className="font-medium mb-[5px]">{service.title} </div>
									<span className="text-black">{service.description}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="">
				<div className="text-[#21739D] pt-[70px] pb-[100px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[32px] text-center font-medium mb-[50px]">
						Why Choose VGD Promoters Group?
					</div>
					<div className="flex items-center justify-center gap-[50px]">
						<img src={whyVGD} className="w-[500px] max-xl:hidden" />
						<div className="w-fit flex flex-col xl:gap-[40px] gap-[20px] md:max-w-[500px] text-[18px]">
							{whyChooseVGD.map((item, index) => (
								<div className="flex items-start gap-[10px]">
									<img src={check} />
									<span>{item}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="pb-[100px] max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="text-[32px] text-center font-medium text-[#21739D]">
					What Our Clients Say?
				</div>
				<div className="text-center mt-[20px]">
					Trusted by Families, Investors & Institutions Across Tamil Nadu
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[50px]">
					{reviews.map((review, index) => (
						<div className={`${review.customStyle} border-solid border-[1.5px] border-[#8e8e8e] p-[30px] rounded-[15px]`}>
							<div className="flex items-top justify-between">
								<div className="font-medium text-[20px] text-[#21739D]">{review.name}</div>
								<img src={quotes} className="w-[40px]" />
							</div>
							<div className="my-[20px]">{review.review}</div>
							<div className="flex">
								<img src={star} />
								<img src={star} />
								<img src={star} />
								<img src={star} />
								<img src={star} />
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
}