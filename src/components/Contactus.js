import firstSection from '../images/first-section.png';

import check from '../images/check.svg';
import mail from '../images/mail.svg';
import location from '../images/location.svg';
import phone from '../images/phone.svg';
import walk from '../images/contactus-page/walk.svg';
import brochure from '../images/contactus-page/brochure.svg';
import approvals from '../images/contactus-page/approvals.svg';

import { contactUsQuestions } from './Variables.js';

import Header from './Header.js';
import Footer from './Footer.js';
import FormComponent from './FormComponent.js';

export default function ContactUs() {
	return(
		<div className="font-['Lexend_Deca']">
			<Header activeTab="contactus" customStyle={"bg-[#CFEAFA]"} />
			<div className="bg-[#CFEAFA]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="text-black py-[50px]">
						<div className="flex justify-between items-center gap-[50px]">
							<div className="xl:max-w-[650px]">
								<div className="text-[40px] text-[#21739D]">Let’s Build Your Future—Together</div>
								<div className="my-[30px]">
									At VGD Promoters Group, we don’t just sell plots—we build long-term relationships based on trust, transparency, and results.
								</div>
								<div className="w-fit mt-[30px] flex flex-col gap-[20px] max-w-[800px] sm:text-[18px]">
									{contactUsQuestions.map((item, index) => (
										<div className="flex items-start gap-[10px]">
											<img src={check} />
											<span>{item}</span>
										</div>
									))}
								</div>
								<a href="/formsubmit">
									<div className="w-fit text-center bg-[#21739D] py-[10px] px-[20px] rounded-[5px] cursor-pointer mt-[20px]">
										<span className="text-[#ffffff] font-medium">
											Book an Appointment
										</span>
									</div>
								</a>
							</div>
							<img src={firstSection} className="max-lg:hidden w-[40%]" />
						</div>
					</div>
				</div>
			</div>
			<div className="mapImage max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="max-w-[1000px] flex max-lg:flex-col pt-[300px] mb-[100px] justify-center mx-auto">
					<div className="bg-[#21739D] text-white lg:w-[50%] pt-[20px] pl-[20px] lg:rounded-l-[10px] max-lg:rounded-t-[10px] shadow-[1px_1px_20px_30px_rgba(0,0,0,0.05)]">
						<div className="text-center text-[20px]">Contact Us</div>
						<div className="flex flex-col gap-[40px] py-[50px]">
							<a href="">
								<div className="flex gap-[20px]">
									<img src={location} className="w-[30px]" />
									<span>
										510, Vijay Builders, Dharapuram Main Road, 
										<br />
										Perichipalayam, Tirupur - 641604
									</span>
								</div>
							</a>
							<a href="mailto:vgdpromoters@gmail.com">
								<div className="flex gap-[20px] ml-[2px]">
									<img src={mail} className="w-[25px]" />
									<span>
										vgdpromoters@gmail.com
									</span>
								</div>
							</a>
							<a href="tel:+91 8807553748">
								<div className="flex gap-[20px] ml-[2px]">
									<img src={phone} />
									<span className="text-[#ffffff]">
										+91 8807553748
									</span>
								</div>
							</a>
						</div>
					</div>
					<div className="bg-[#ffffff] lg:w-[50%] pt-[20px] px-[20px] lg:rounded-r-[10px] max-lg:rounded-b-[10px] border-solid border-[1.5px] border-[#21739D] shadow-[1px_1px_20px_30px_rgba(0,0,0,0.05)]">
						<FormComponent isContactUsPage={true} />
					</div>
				</div>
				<div className="text-center mb-[50px]">
					<div className="text-[32px] font-normal">Let’s Meet on Site</div>
					<div className="my-[20px] mb-[50px] leading-[30px]">
						Prefer an in-person visit? Book a guided tour of any of our projects in Tiruppur, Coimbatore, Avinashi, or Palladam.
						<br />
						We'll show you everything—from land quality and legal status to location benefits.
					</div>
					<div className="flex flex-wrap justify-between gap-[30px] text-left">
						<div className="flex items-center">
							<img src={walk} />
							<div>Walk the site</div>
						</div>
						<div className="flex items-center gap-[20px]">
							<img src={approvals} />
							<div>Discuss payment plans & approvals</div>
						</div>
						<div className="flex items-center gap-[20px]">
							<img src={brochure} />
							<div>Get detailed brochures</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}