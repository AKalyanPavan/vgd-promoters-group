import firstSection from '../images/first-section.png';

import Header from './Header.js';
import Footer from './Footer.js';

import { servicesPage } from './Variables.js';

export default function Services() {
	return(
		<div className="font-['Lexend_Deca'] ">
			<Header activeTab="services" customStyle={"bg-[#CFEAFA]"} />
			<div className="bg-[#CFEAFA]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-[#21739D] py-[50px]">
						<div className="flex justify-between items-start gap-[50px]">
							<div className="xl:max-w-[650px]">
								<div className="text-[40px]">Complete Real Estate Solutions</div>
								<div className="text-[30px] text-[#73A729]">Backed by Expertise</div>
								<div className="my-[30px]">
									At VGD Developers, we offer a 360° suite of services to simplify and secure your property journey. From land development and approvals to construction and investment guidance—we ensure every step is transparent, compliant, and profitable.
								</div>
								<div className="w-fit text-center bg-[#21739D] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
									<span className="text-[#ffffff] font-medium">
										Book an Appointment
									</span>
								</div>
							</div>
							<img src={firstSection} className="max-lg:hidden w-[40%]" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] pt-[100px] pb-[50px]">
					<div className="text-[32px] text-center text-[#21739D]">
						Our Services
					</div>
					<div className="flex flex-col gap-[100px] mt-[50px] mb-[100px]">
						{servicesPage.map((service, index) => (
							<div className="flex max-lg:flex-col items-center justify-center gap-[50px] mx-auto border-solid border-[#d8d8d8] max-lg:border-[2px] max-lg:p-[20px] rounded-[20px]">
								<div className="xl:w-[40%]">
									<div className="text-[24px] text-[#73A729] max-lg:text-center">{service.title}</div>
									<div className="mt-[20px]">{service.description}</div>
									<div className="text-[18px] text-[#21739D] mt-[30px]">{service.subtitle}</div>
									<ul className="list-disc list-inside">
										{service.subtitleItems.map((item, index) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
								<img src={service.imageSource} className="lg:w-[40%] grayscale-[100%]" />
							</div>
						))}
					</div>
					<div className="text-[24px] text-center text-[#21739D]">
						Start Your Real Estate Journey with Confidence
					</div>
					<div className="text-center my-[20px] text-[18px]">
						From plot selection to approvals and construction—we’re here to build your future, the right way.
					</div>
					<a href="tel:+91 8807553748">
						<div className="bg-[#21739D] w-fit mx-auto h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium">
							<span className="text-[#ffffff] ml-[10px]">
								Contact Us
							</span>
						</div>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	)
}